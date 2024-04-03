import styled from "styled-components";
import {
  HiOutlineSquare2Stack,
  HiOutlinePencil,
  HiOutlineTrash,
} from "react-icons/hi2";

import CreateCabinForm from "./CreateCabinForm";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Table from "../../ui/Table";
import Modal from "../../ui/Modal";
import Menus from "../../ui/Menus";

import { formatCurrency } from "../../utils/helpers";
import { useDeleteCabin } from "./useDeleteCabin";
import { useCreateCabin } from "./useCreateCabin";

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

function CabinRow({ cabin }) {
  const { isCreating, createCabin } = useCreateCabin();
  const { isDeleting, deleteCabin } = useDeleteCabin();
  const isProcessing = isCreating || isDeleting;
  const {
    id: cabinId,
    name,
    maxCapacity,
    regularPrice,
    discount,
    description,
    image,
  } = cabin;
  function handleDuplicate() {
    createCabin({
      name: `Copy of ${name}`,
      maxCapacity,
      regularPrice,
      discount,
      description,
      image,
    });
  }

  return (
    <Table.Row>
      <Img src={image} />
      <Cabin>{name}</Cabin>
      <div>Fits up to {maxCapacity} guests</div>
      <Price>{formatCurrency(regularPrice)}</Price>
      {discount ? (
        <Discount>{formatCurrency(discount)}</Discount>
      ) : (
        <span>&mdash;</span>
      )}
      <div>
        <Modal>
          <Menus.Menu>
            <Menus.Toggle id={cabinId} />
            <Menus.List id={cabinId}>
              <Menus.Button
                icon={<HiOutlineSquare2Stack />}
                onClick={handleDuplicate}
              >
                Duplicate
              </Menus.Button>

              <Modal.Open opens="edit">
                <Menus.Button icon={<HiOutlinePencil />}>Edit</Menus.Button>
              </Modal.Open>

              <Modal.Open opens="delete">
                <Menus.Button icon={<HiOutlineTrash />}>Delete</Menus.Button>
              </Modal.Open>
            </Menus.List>

            <Modal.Window name="edit">
              <CreateCabinForm cabinToUpdate={cabin} />
            </Modal.Window>

            <Modal.Window name="delete">
              <ConfirmDelete
                resourceName={`Cabin-${cabin.name}`}
                onConfirm={() => deleteCabin(cabinId)}
                disabled={isProcessing}
              />
            </Modal.Window>
          </Menus.Menu>
        </Modal>
      </div>
    </Table.Row>
  );
}

export default CabinRow;

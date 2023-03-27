import { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";

import { FieldSet } from "../../styles/Fieldset.styled";
import { Modal } from "../../components/Modal";

export const Users = () => {
  const column = [
    {
      name: "ID",
      style: {
        cursor: "pointer",
      },
      selector: (row) => row.id,
    },
    {
      name: "Name",
      style: {
        cursor: "pointer",
      },
      selector: (row) => row.name,
    },
    {
      name: "Email",
      style: {
        cursor: "pointer",
      },
      selector: (row) => row.email,
    },
  ];
  const [data, setData] = useState([]);
  const [dataRow, setDataRow] = useState({});
  const [openModal, setOpenModal] = useState(false);
  useEffect(() => {
    const data = async () => {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => setData(res.data))
        .catch((err) => console.log(err));
    };
    data();
  }, []);

  const handleClick = (e) => {
    setDataRow(e);
    setOpenModal(true);
  };

  return (
    <>
      <FieldSet> 

        <DataTable

          width="100%"
          onRowClicked={handleClick}
          columns={column}
          data={data}
        ></DataTable>
      </FieldSet>
      <Modal
        setOpen={setOpenModal}
        usersData={dataRow}
        isOpen={openModal}
      ></Modal>
    </>
  );
};

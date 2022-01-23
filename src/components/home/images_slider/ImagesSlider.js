import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Button,
  Alert
} from "shards-react";
import { formatPost } from "../../../utils/formatter";
import ImagesTable from "../../common/ImagesTable";
import PageTitle from "../../common/PageTitle";
import AddModal from "./components/AddModal";
import EditModal from "./components/EditModal";

const ImagesSlider = ({ data }) => {
  const [updates, setUpdates] = useState([]);

  useEffect(() => {

    setUpdates(data);
  }, [data]);
  
  const [open, setOpen] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);
  const [alert, setAlert] = useState({
    show: false,
    theme: "warning",
    text: ""
  });


  const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);

  const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsFilePicked(true);
	};

  const [marqueeData, setMarqueeData] = useState({
    id: "",
    link: ""
  });
  // const [addData, setAddData] = useState({
  //   link: ""
  // });

  const showAlert = (res, text, toggle=false, toggleAdd=false) => {
    toggle && handleToggle();
    toggleAdd && handleAddToggle();
    if (res) {
      setAlert({ show: true, theme: "success", text: text });
    } else {
      setAlert({ show: true, theme: "warning", text: "ERROR!! Please try again :(" });
    }
    setTimeout(() => {
      setAlert({ show: false, text: "" });
    }, 2000);
  };

  const handleEditMarquee = async () => {
    const newData = [...updates.filter(({ id }) => id !== marqueeData.id), marqueeData];
    const obj = formatPost({ code: "1", key: "images", db: JSON.stringify(newData) });
    const { data } = await axios.post("http://localhost/delhisports/api/home/edit/", obj);
    console.log((data))
    setUpdates(newData);
    showAlert(data.response, "Updated", true);
  };
  
  // const handleAddMarquee = async () => {
  //   const newData = [...updates, addData];
  //   const obj = formatPost({ code: "1", key: "images", db: JSON.stringify(newData) });
  //   const { data } = await axios.post("http://localhost/delhisports/api/home/edit/", obj);
  //   setUpdates(newData);
  //   showAlert(data.response, "Added", false, true);
  // };

  const handleToggle = () => {
    setOpen(!open);
  };
  const handleAddToggle = () => {
    setOpenAdd(!openAdd);
  };

  const handleEdit = update => {
    setMarqueeData(update);
    handleToggle();
  };

  const handleDelete = async delId => {
    const newData = [...updates.filter(({ id }) => id !== delId)];
    const obj = formatPost({ code: "1", key: "images", db: JSON.stringify(newData) });
    const { data } = await axios.post("http://localhost/delhisports/api/home/edit/", obj);
    setUpdates(newData);
    showAlert(data.response, "Deleted");
  };

  const handleChange = e => {
    const val = e.target.value;
    const name = e.target.name;
    setMarqueeData({ ...marqueeData, [name]: val });
  };
  // const handleAddChange = e => {
  //   const val = e.target.value;
  //   const name = e.target.name;
  //   setAddData({ ...addData, [name]: val });
  // };

  return (
    <Container fluid className="main-content-container px-4">
      <Row noGutters className="page-header py-4 space-between">
        <PageTitle
          sm="4"
          title="Slider Images"
          subtitle="Slider"
          className="text-sm-left"
        />
        <Button onClick={handleAddToggle}>Slider</Button>
      </Row>
      {alert.show &&
        <Alert theme={alert.theme} fade={true}>
          {alert.text}
        </Alert>
      }
      <Row>
        <ImagesTable updates={updates} handleDelete={handleDelete} handleEdit={handleEdit} />
      </Row>
      <EditModal
        open={open}
        handleToggle={handleToggle}
        marqueeData={marqueeData}
        handleChange={handleChange}
        handleEditMarquee={handleEditMarquee}
      />
      <AddModal
        open={openAdd}
        handleToggle={handleAddToggle}
        handleChange={changeHandler}
        isFilePicked={isFilePicked}
        selectedFile={selectedFile}
        // handleAddMarquee={handleAddMarquee}
      />
    </Container>
  );
};

export default ImagesSlider;

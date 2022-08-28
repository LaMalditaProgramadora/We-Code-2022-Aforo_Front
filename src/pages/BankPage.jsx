import { useEffect, useState } from "react";
import { listById } from "../services/BankService.js";
import socket from "../utils/socket.js";

const BankPage = () => {
  const [name, setName] = useState("");
  const [idBank, setIdBank] = useState("");

  const [capacity, setCapacity] = useState({
    capacityNormalWindow: 0,
    capacityNormalPlatform: 0,
    capacityPrefWindow: 0,
    capacityPrefPlatform: 0,
    capacitySensorInt: 0,
    capacityInt: 0,
    capacityAtm: 0,
    capacityTranQueue: 0,
    capacityAtmQueue: 0

  });


  useEffect(() => {
    if (idBank !== "") {
      socket.on(`input ${idBank}`, (data) => {
        setCapacity(data);
      });
    }
  });

  const listByIdFromApi = async (idBank) => {
    if (idBank === "") return;
    listById(idBank).then(
      (data) => {
        if (data && data.data) {
          setName(data.data.name);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  const handleChange = (event) => {
    const idBank = event.target.value;
    setIdBank(idBank);
  }

  const handleSubmit = () => {
    listByIdFromApi(idBank);
  }

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <label>idBank: </label>
      <input type="text" value={idBank} onChange={handleChange} />
      <button onClick={handleSubmit}>Buscar</button>
      <br></br>
      <br></br>
      <label>Name: </label>
      <label>{name}</label>
      <br></br>
      <br></br>
      <label>Ticket: </label>
      <br></br>
      <label>capacityNormalWindow: </label>
      <label>{capacity.capacityNormalWindow}</label>
      <br></br>
      <label>capacityNormalPlatform: </label>
      <label>{capacity.capacityNormalPlatform}</label>
      <br></br>
      <label>capacityPrefWindow: </label>
      <label>{capacity.capacityPrefWindow}</label>
      <br></br>
      <label>capacityPrefPlatform: </label>
      <label>{capacity.capacityPrefPlatform}</label>
      <br></br>
      <br></br>
      <label>Sensor: </label>
      <br></br>
      <label>capacitySensorInt: </label>
      <label>{capacity.capacitySensorInt}</label>
      <br></br>
      <br></br>
      <label>Camera 1: </label>
      <br></br>
      <label>capacityInt: </label>
      <label>{capacity.capacityInt}</label>
      <br></br>
      <br></br>
      <label>Camera 2: </label>
      <br></br>
      <label>capacityAtm: </label>
      <label>{capacity.capacityAtm}</label>
      <br></br>
      <br></br>
      <label>Camera 3: </label>
      <br></br>
      <label>capacityTranQueue: </label>
      <label>{capacity.capacityTranQueue}</label>
      <br></br>
      <label>capacityAtmQueue: </label>
      <label>{capacity.capacityAtmQueue}</label>
      <br></br>
    </div>
  );
};

export default BankPage;

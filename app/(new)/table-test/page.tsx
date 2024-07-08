const messageList = [
  {
    id: 1,
    time: "18/06/2024",
    messageType: "Camt.053",
    channel: "Canal Primário",
    flow: "Enviada",
    situation: "Respondida",
  },
  {
    id: 2,
    time: "18/06/2024",
    messageType: "Camt.053",
    channel: "Canal Primário",
    flow: "Enviada",
    situation: "Respondida",
  },
  {
    id: 3,
    time: "18/06/2024",
    messageType: "Camt.053",
    channel: "Canal Primário",
    flow: "Enviada",
    situation: "Respondida",
  },
  {
    id: 4,
    time: "18/06/2024",
    messageType: "Camt.053",
    channel: "Canal Primário",
    flow: "Enviada",
    situation: "Respondida",
  },
  {
    id: 5,
    time: "18/06/2024",
    messageType: "Camt.053",
    channel: "Canal Primário",
    flow: "Enviada",
    situation: "Respondida",
  },
  {
    id: 6,
    time: "18/06/2024",
    messageType: "Camt.053",
    channel: "Canal Primário",
    flow: "Enviada",
    situation: "Respondida",
  },
  {
    id: 7,
    time: "18/06/2024",
    messageType: "Camt.053",
    channel: "Canal Primário",
    flow: "Enviada",
    situation: "Respondida",
  },
  {
    id: 8,
    time: "18/06/2024",
    messageType: "Camt.053",
    channel: "Canal Primário",
    flow: "Enviada",
    situation: "Respondida",
  },
  {
    id: 9,
    time: "18/06/2024",
    messageType: "Camt.053",
    channel: "Canal Primário",
    flow: "Enviada",
    situation: "Aguardando resposta",
  },
  {
    id: 10,
    time: "18/06/2024",
    messageType: "Camt.053",
    channel: "Canal Primário",
    flow: "Enviada",
    situation: "Erro pelo BC",
  },
  {
    id: 11,
    time: "18/06/2024",
    messageType: "Camt.053",
    channel: "Canal Primário",
    flow: "Enviada",
    situation: "Processada pelo SPI",
  },
  {
    id: 12,
    time: "18/06/2024",
    messageType: "Camt.053",
    channel: "Canal Primário",
    flow: "Enviada",
    situation: "Aguardando processamento",
  },
  {
    id: 13,
    time: "18/06/2024",
    messageType: "Camt.053",
    channel: "Canal Primário",
    flow: "Enviada",
    situation: "Respondida",
  },
  {
    id: 14,
    time: "18/06/2024",
    messageType: "Camt.053",
    channel: "Canal Primário",
    flow: "Enviada",
    situation: "Respondida",
  },
];

function renderizarLinhas() {
  return messageList.map((msg) => {
    return (
      <tr>
        <td className="border border-slate-600 p-2">{msg.time}</td>
        <td className="border border-slate-600 p-2">{msg.messageType}</td>
        <td className="border border-slate-600 p-2">{msg.channel}</td>
        <td className="border border-slate-600 p-2">{msg.flow}</td>
        <td className="border border-slate-600 p-2">{msg.situation}</td>
      </tr>
    );
  });
}

export default function TableTest() {
  return (
    <div className="flex justify-center items-center p-5">
      <table>
        <thead>
          <tr>
            <td className="border border-slate-600 p-2">time</td>
            <td className="border border-slate-600 p-2">messageType</td>
            <td className="border border-slate-600 p-2">channel</td>
            <td className="border border-slate-600 p-2">flow</td>
            <td className="border border-slate-600 p-2">situation</td>
          </tr>
        </thead>
        <tbody>
          {renderizarLinhas()}
        </tbody>
      </table>
    </div>
  );
}

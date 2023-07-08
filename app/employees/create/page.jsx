"use client"
import React, { useState, useEffect } from 'react';

const NewEmployee = () => {
  const [selectedPort, setSelectedPort] = useState('');
  const [cardID, setCardID] = useState('');
  const [step, setStep] = useState(1);

  useEffect(() => {
    let serialPort;

    const requestPort = async () => {
      const ports = await navigator.serial.getPorts();
      if (ports.length > 0) {
        const port = ports[0];
        await connectPort(port);
      } else {
        console.log('No serial ports available.');
      }
    };

    const connectPort = async (port) => {
      try {
        await port.open({ baudRate: 9600 });
        setStep(1); // Step 1'e geçiş yap
        const reader = port.readable.getReader();

        const readData = async () => {
          try {
            while (true) {
              const { value, done } = await reader.read();
              if (done) break;
              const receivedData = new TextDecoder().decode(value);
              const receivedCardID = receivedData.trim(); // Seri porttan gelen veri
              setCardID(receivedCardID);
              setStep(2); // Step 2'ye geçiş yap
            }
          } catch (error) {
            console.error('Error reading data:', error);
          }
        };

        readData();
      } catch (error) {
        console.error('Error opening port:', error);
      }
    };

    const initializeSerial = async () => {
      try {
        const port = await navigator.serial.requestPort();
        setSelectedPort(port.name);
        await connectPort(port);
      } catch (error) {
        console.error('Error requesting port:', error);
      }
    };

    if ('serial' in navigator) {
      initializeSerial();
    } else {
      console.log('Web Serial API is not supported in this browser.');
    }

    return () => {
      if (serialPort) {
        serialPort.close();
      }
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Çalışan kayıt formu gönderildiğinde burada işlemler gerçekleştirilebilir.
    // Kaydedilen çalışan bilgilerini kullanabilirsiniz.
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-100 rounded-lg shadow-lg">
      {step === 1 && (
        <div>
          <p>Step 1: Port seçme kısmı</p>
          <p>Selected Port: {selectedPort}</p>
        </div>
      )}

      {step === 2 && (
        <div>
          <p>Step 2: Kart okunuyor - ID: {cardID}</p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="cardID" className="block font-medium mb-2">
                CARD ID:
              </label>
              <input
                type="text"
                id="cardID"
                disabled
                value={cardID}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            {/* Diğer çalışan kayıt formu alanlarını burada oluşturabilirsiniz */}
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            >
              Kaydet
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default NewEmployee;

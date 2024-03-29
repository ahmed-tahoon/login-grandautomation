import React, { useState, useEffect, useContext } from "react";
import { Footer } from "flowbite-react";

function FooterComponent() {
  return (
    <Footer className="p-3  bg-[#121212]">
      <div className="w-full text-center bg-[#121212]">
        <Footer.Copyright
          href="#"
          by="GrandAutomation"
          year={new Date().getFullYear()}
        />
      </div>
    </Footer>
  );
}

export default FooterComponent;

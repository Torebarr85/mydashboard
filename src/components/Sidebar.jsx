import React from "react";
import { Link, NavLink } from "react-router-dom";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { links } from "../data/dummy.js";
import { useStateContext } from "../contexts/ContextProvider.js";

const Sidebar = () => {
  const { activeMenu, setActiveMenu } = useStateContext();
  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";
  return (
    /*overflow hidden = se un contenuto eccede il contenitore allora nascondilo. solo in caso di md media query 768px 
      overflow auto = invece mette una barra di scorrimento se il contenuto eccede... 
      md:hover:overflow-auto= fa vedere la barra solo se vado sopra (hover appunto)*/
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {/*In questo caso, il menu verrà mostrato solo se activeMenu è vero. Se activeMenu è falso, il menu non verrà renderizzato nel DOM */}
      {activeMenu && (
        <>
          {/* LOGO + PULSANTE CHIUDI */}
          <div className="flex justify-between items-center">
            <Link
              to="/"
              onClick={() => setActiveMenu(false)}
              className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900">
              <SiShopware /> <span>ESSEBI</span>
            </Link>
            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                type="button"
                onClick={() => setActiveMenu(!activeMenu)}
                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden">
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>

          {/* SIDEBAR MENU TITLE + LINK + ICONE 
         Renderizzata la lista dal json dummy.js dentro la cartella data
        */}
          <div className="mt-10">
            {/* sto facendo un renderizzazione della list con map e restituisco solo il title */}
            {links.map((item) => (
              /* come key uso il title perchè è unique. le keys devono essere uniche*/
              <div key={item.title}>
                <p className="text-gray-400 m-3 mt-4 uppercase">{item.title}</p>

                {/* sto facendo un loop del loop
            poi Se isActive è vero, l'elemento avrà uno sfondo nero ("backgroundColor: black") + la classe activeLink */}

                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.name}`}
                    key={link.name}
                    onClick={() => {}}
                    style={({ isActive }) => ({
                      backgroundColor: isActive ? "lightgreen" : "",
                    })}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }>
                    {link.icon}
                    <span className="capitalize ">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;

import { useState } from "react";
import { Link } from "react-router-dom";
import { ActionIcon, Drawer } from "@mantine/core";
import { FaHamburger } from "react-icons/fa";
import { useDisclosure } from "@mantine/hooks";
import { useQuery } from "@tanstack/react-query";
import { getNewsCategory, getTeamList } from "../api/categories";
import DrawerContent from "./DrawerContent";

const Header = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [teamHover, setTeamHover] = useState(false);
  const [hover, setHover] = useState(false);
  // const [dropOptions, setDropOptions] = useState([]);
  const { data: dropOptions } = useQuery({
    queryKey: ["newsCategory"],
    queryFn: getNewsCategory,
    staleTime: 5 * 60 * 1000, // Cache for 5 mins
    cacheTime: 10 * 60 * 1000, // Keep data for 10 mins
  });
  const { data: teamList } = useQuery({
    queryKey: ["teamList"],
    queryFn: getTeamList,
    staleTime: 5 * 60 * 1000, // Cache for 5 mins
    cacheTime: 10 * 60 * 1000, // Keep data for 10 mins
  });

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <div className="flex justify-between items-center bg-[#09ae84]  px-4">
      <Link to="/">
        <img
          className="h-20 cursor-pointer"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJd6fe_4zNybRyHSfe3rVymQ2E3jD2-d-AfSJv583qglLFKiWIXKV9BHgkABF7dfaRk6M&usqp=CAU"
          alt="logo"
        />
      </Link>

      <div className="hidden md:block">
        <ul className="text-white text-center flex gap-8 ">
          <Link to="/livescores">
            <li className=" cursor-pointer">Live Scores</li>
          </Link>
          <li className="cursor-pointer">Schedules</li>
          <li
            className="cursor-pointer relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            News
            {hover && (
              <ul className="absolute top-full left-0 text-black bg-white shadow-md w-36 ">
                {dropOptions.slice(0, 8).map((obj) => {
                  return (
                    <li key={obj.id} className="py-2 px-4 hover:bg-gray-200">
                      {obj.name}
                    </li>
                  );
                })}
              </ul>
            )}
          </li>

          <li className=" cursor-pointer">Series</li>
          <li
            className=" cursor-pointer relative"
            onMouseEnter={() => setTeamHover(true)}
            onMouseLeave={() => setTeamHover(false)}
          >
            Teams
            {teamHover && (
              <ul className="absolute top-full left-0 text-black bg-white shadow-md w-36 ">
                <div>
                  {teamList.slice(1, 13).map((obj) => {
                    return (
                      <li
                        key={obj.TeamId}
                        className="py-2 px-4 hover:bg-gray-200"
                      >
                        {obj.teamName}
                      </li>
                    );
                  })}
                </div>
              </ul>
            )}
          </li>
          <li className="cursor-pointer">Rankings</li>
        </ul>
      </div>
      {/* <div className=" md:flex hidden">
        <Input size="xs" placeholder="Search..."  />
          <Button size="xs" color="#09ae84">
<CiSearch stroke="2"/>
          </Button>
      </div> */}
      <div className="md:hidden">
        <Drawer
          styles={{
            body: { backgroundColor: "#09ae84" },
            header: { backgroundColor: "#09ae84" },
          }}
          opened={opened}
          onClose={close}
          title={
            <Link to="/">
              <img
                className="h-20 cursor-pointer"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJd6fe_4zNybRyHSfe3rVymQ2E3jD2-d-AfSJv583qglLFKiWIXKV9BHgkABF7dfaRk6M&usqp=CAU"
                alt="logo"
              />
            </Link>
          }
        >
          {/* Drawer content */}
          <DrawerContent />
        </Drawer>

        <ActionIcon variant="transparent" color="dark" onClick={open}>
          <FaHamburger size={21} />
        </ActionIcon>
      </div>
    </div>
  );
};

export default Header;

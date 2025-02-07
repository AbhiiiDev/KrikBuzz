import { useState } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const DrawerContent = ({dropOptions,teamList}) => {
  const [teamHover, setTeamHover] = useState(false);
  const [hover, setHover] = useState(false);
  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };
  return (
    <div>
      <ul className="  flex flex-col gap-8">
                <Link to='/livescores'>
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
                    <ul className="absolute top-full -right-10 text-black bg-white shadow-md w-36 ">
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
                    <ul className="absolute top-full -right-10 text-black bg-white shadow-md w-36 ">
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
  )
}
DrawerContent.propTypes = {
    dropOptions: PropTypes.object.isRequired,
    teamList:PropTypes.object.isRequired,
};

export default DrawerContent

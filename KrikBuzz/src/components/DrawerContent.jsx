import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const DrawerContent = () => {
  return (
    <div className='bg-primary'>
      <ul className="flex flex-col gap-8 font-semibold ">
                <Link to='/livescores'>
                <li className=" cursor-pointer">Live Scores</li>
                </Link>
                <li className="cursor-pointer">Schedules</li>
                <li
                  className="cursor-pointer relative"
                >
                  News
                </li>
                <li className=" cursor-pointer">Series</li>
                <li
                  className=" cursor-pointer relative"
                >
                  Teams
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

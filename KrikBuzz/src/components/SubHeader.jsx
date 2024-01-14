import PropTypes from "prop-types";

const SubHeader = ({ data }) => {
  console.log(data);

  const { seriesMatches } = data;

  const { seriesAdWrapper } = seriesMatches[0];

  const { matches } = seriesAdWrapper;

  const { matchInfo } = matches[0];

  const { stateTitle, state } = matchInfo;

  const {
    team1: { teamSName: team1Name },
    team2: { teamSName: team2Name },
  } = matchInfo;

  return (
    <li className="text-white text-sm mx-2  p-2 hover:bg-gray-600 cursor-pointer">
      {`${team1Name} vs ${team2Name} - ${state}`}
    </li>
  );
};

SubHeader.propTypes = {
  data: PropTypes.object.isRequired,
};

export default SubHeader;

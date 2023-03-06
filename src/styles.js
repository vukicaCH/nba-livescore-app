import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  gameScoreFinal:{
    display: 'flex',
    flexDirection: 'column',
    alignItems:'center',
    gap:'10px',
    justifyContent:'center',
  },
  gameScore:{
    display: 'flex',
    flexDirection: 'column',
    alignItems:'center',
    justifyContent:'center',
    gap:'5px',
    color: 'grey'
  },
  gameTeams:{
    display: 'flex',
    flexDirection: 'column',
    gap:'5px',
    padding: '10px'
  },
  gameTeamLogo:{
    width: '20px'
  },

  tableRow:{
    cursor: 'pointer',
  },

  gameCell:{
    padding:'0 !important',
    textAlign: 'center !important',
  },

  squadPlayerCell:{
    padding:'0 !important',
    textAlign: 'left !important',
    cursor:'pointer',
  },

  shortCell:{
    width: '2%',
    padding:'0 !important',
    textAlign: 'center !important'
  },

  positionCell:{
    padding:'0 !important',
    textAlign: 'center !important',
    backgroundColor: 'blue',
  },

  tooltip:{
    fontSize: '12px !important',
    fontWeight: '800',
  },

  standingsPosition:{
    padding: '5px',
    borderRadius: '2px',
    color: 'white',
    backgroundColor: 'blue',
    width: '25px',
    height: '25px',
    margin: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: '800'
  },

  standingsTeamInfo:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '5px',
    cursor: 'pointer'
  },

  playerInfo:{
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '10px'
    },
  },

  playerData:{
    display: 'flex',
    alignItems: 'center'
  },

  playerText:{
    display:'flex',
    flexDirection: 'column',
    marginLeft: '10px',
  },

  teamImage:{
    width: '80px',
    borderRadius: '10px'
  },

  playerName:{
    marginBottom: '5px'
  },

  playerSpan:{
    fontSize: '13px'
  },

  playerSpanStats:{
    color: 'rgba(0,0,0,.6)',
    marginLeft: '2px'
  },

  gameStatsInfoTeam:{
    display: 'flex',
    flexDirection: 'column',
    alignItems:'center',
    gap: '5px',
    textAlign: 'center'
  },

  gameStatsInfoData:{
    margin: '0 10px',
    [theme.breakpoints.down('sm')]: {
      margin: '0'
    },
  },

  dateTime:{
    fontWeight: '300'
  },

  finalScore:{
    fontSize: '25px',
    fontWeight: '800',
    [theme.breakpoints.down('sm')]: {
      margin: '0 20px'
    },
  },

  gameStatsInfo:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '50px'
  },

  gameDetailsTeams:{
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
    textAlign:'left',
    padding: '0 16px'
  },
   
  game:{
    display: 'flex',
    alignItems:'center',
    justifyContent: 'space-between',
    margin: '20px 0',
    borderRadius: '3px',
    padding: '10px',
    backgroundColor: 'rgb(245, 245, 245)',
    [theme.breakpoints.down('sm')]: {
      margin: '20px 10px'
    },
  },

  gameOverview:{
    display: 'flex',
    flexDirection: 'column',
  },

  gameTeam:{
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
  },

  gameTeamImage:{
    width: '40px',
    height: '40px',
    objectFit: 'contain',
    marginBottom:'5px'
  },

  gameLink:{
    textAlign: 'center'
  },

  noGamesAvailable:{
    backgroundColor: 'rgba(0,0,0,.5)',
    height: '500px',
    borderRadius: '5px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    gap: '30px',
    margin: '20px 0'
  },

  h2hGamesHeader:{
    [theme.breakpoints.down('sm')]: {
      margin: '0 10px'
    },
  },

  h2hGame:{
    display: 'flex',
    alignItems:'center',
    justifyContent: 'space-between',
    margin: '20px 0',
    borderRadius: '3px',
    padding: '10px',
    backgroundColor: 'rgb(245, 245, 245)',
    [theme.breakpoints.down('sm')]: {
      margin: '20px 10px'
    },
  },

  h2hStats:{
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
    padding: '5px 0',
    flex: 1,
  },

  h2hTeams: {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
    [theme.breakpoints.down('sm')]: {
      gap: '10px'
    },
  },

  h2hScore: {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px', 
  },

  h2hGameDetails:{
    paddingLeft: '10px'
  },

  h2hTeam:{
    display: 'flex',
    alignItems: 'center',
    gap: '5px'
  },

  h2hTeamLogo:{
    width: '30px',
    height: '30px',
    objectFit: 'contain'
  },

  link:{
    textDecoration: 'none',
    color: 'inherit'
  },

  navLink:{
    textDecoration: 'none',
    color: 'white'
  },

  playerStatsTeamImage:{
    width: '45px',
    height: '45px',
    objectFit: 'contain'
  },

  playerStatsTeamScore:{
    display: 'flex',
    alignItems: 'center',
    gap: '5px'
  },

  searchResults:{
    marginTop: '25px 0'
  },

  searchResult:{
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    margin: '10px 0',
    justifySelf: 'flex-start'
  },

  searchResultImage:{
    width: '45px',
    height: '45px',
    objectFit: 'contain'
  },

  searchResultTeam:{
    letterSpacing: '-0.5px',
    opacity: '0.7',
  },

  searchResultData:{
    textAlign: 'left',
    color: 'inherit'
  },

  noStatsAvailable:{
    height: '490px',
    borderRadius: '5px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#E2DFD2',
    textShadow: '1px 1px 1px #E2DFD2',
    gap: '30px',
    [theme.breakpoints.down('sm')]: {
      margin: '20px 10px'
    },
  },

  noStatsAvailableTitle:{
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      fontSize: '40px'
    },
  },

  notInTheSquad:{
    position: 'absolute',
    width: '55%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  notInTheSquadText:{
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  errorPageBackground:{
    position: 'fixed',
    top: '0',
    left: '0',
    zIndex: '2',
    width: '100%',
    height: '100vh',
    backgroundColor: 'rgba(0,0,0,.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },

  errorData:{
    width: '80%',
    height: '80%',
    backgroundColor: '#DF2727',
    borderRadius: '50px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    position: 'relative'
  },

  errorName:{
    fontSize: '80px'
  },

  errorMessage:{
    fontSize: '22px',
    fontWeight: '300'
  },

  errorLink:{
    position: 'absolute',
    bottom: '30px',
  },

  showMore:{
    textAlign: 'center',
    margin: '15px 0',
    cursor: 'pointer'
  },

  app:{
    width: '800px',
    margin: 'auto',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    },
  },

  navbar:{
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '50px',
    padding: '15px'
  },

  btn:{
    fontFamily: 'inherit !important'
  },

  btnFullWidth:{
    fontFamily: 'inherit !important',
    width: '100%',
    display: 'flex !important',
    justifyContent: 'flex-start !important',
  },

  gameOverviewTeamImage:{
    width: '90px',
    height: '90px',
    objectFit: 'contain',
    backgroundColor: '#FAF9F6',
    borderRadius: '5px',
    padding: '10px',
  },

  gameMenu:{
    margin: '20px 0',
    [theme.breakpoints.down('sm')]: {
      padding: '0 10px'
    },
  },

  playersStatisticsMenu:{
    margin: '20px 0',
    [theme.breakpoints.down('sm')]: {
      margin: '20px 10px'
    },
  },

  playerStatistics:{
    display: 'grid',
    gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr',
    alignItems: 'center',
    padding: '5px 0',
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: '5fr 1fr 1fr 1fr 1fr',
    },
  },

  playerStatisticsName:{
    textAlign: 'left',
    padding: '0'
  },

  playerStatisticsCell:{
    textAlign: 'center',
  },

  playerGame:{
    display: 'grid',
    gridTemplateColumns: '1fr 3fr 5fr',
    alignItems: 'center',
    padding: '10px 0',
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: '5fr 4fr',
    },
  },

  playerGameDate:{
    textAlign: 'left',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },

  playerGameStats:{
    position: 'relative',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
    },
  },

  playerGameCell:{
    textAlign: 'center'
  },

  playerGameBlocks:{
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },

  playerGameTeamsScore:{
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
  },

  playerGameTeamScore:{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '10px'
  },

  playerGameTeamImage:{
    width: '40px',
    height: '40px',
    objectFit: 'contain',
    [theme.breakpoints.down('sm')]: {
      width: '30px',
      height: '30px',
    },
  },

  playerInfoImage:{
    width: '80px'
  },

  playerGameTeamName:{
    width: '100px',
    textAlign: 'left',
    marginRight: '20px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '13px',
      width: '90px',
    },
  },

  playerGameTeamScorePoints:{
    [theme.breakpoints.down('sm')]: {
      fontSize: '13px'
    },
  },

  playerNotInTheSquad:{
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      fontSize: '13px'
    },
  },

  gameDatePicker:{
    [theme.breakpoints.down('sm')]: {
      padding: '0 10px'
    },
  },

  gamesSkeleton:{
    margin: '20px 0',
    [theme.breakpoints.down('sm')]: {
      padding: '0 10px'
    },
  },

  gameSkeleton:{
    width: '100% !important',
    height: '120px !important',
  },

  playersStatisticsSkeleton:{
    [theme.breakpoints.down('sm')]: {
      padding: '0 10px'
    },
  },

  playerStatisticsSkeleton:{
    width: '100% !important',
    height: '60px !important',
  },

  playersStatisticsSkeletonMenu:{
    width: '150px',
    height: '40px !important',
    margin: '10px 0'
  },

  h2hSkeleton:{
    [theme.breakpoints.down('sm')]: {
      padding: '0 10px'
    },
  },

  h2hGameSkeleton:{
    width: '100% !important',
    height: '60px !important',
  },

  searchResultsSkeleton:{
    [theme.breakpoints.down('sm')]: {
      padding: '0 5px'
    },
  },

  searchResultSkeleton:{
    width: '100% !important',
    height: '60px !important',
  },

  playerInfoSkeleton:{
    [theme.breakpoints.down('sm')]: {
      padding: '0 10px'
    },
  },

  playerGamesSkeleton:{
    marginTop: '50px',
    [theme.breakpoints.down('sm')]: {
      padding: '0 10px'
    },
  },

  playerGameSkeleton:{
    width: '100% !important',
    height: '90px !important',
    [theme.breakpoints.down('sm')]: {
      height: '60px !important',
    },
  },

  playerStatisticsFullName:{
    display: 'block',
    textAlign: 'left'
  },

  gameTeamName:{
    width: '200px',
    [theme.breakpoints.down('sm')]: {
      width: '130px',
    },
  },

  h2hTeamName:{
    width: '200px',
    [theme.breakpoints.down('sm')]: {
      width: '130px',
    },
  },

  playerSeason:{
    margin: '30px 0',
    [theme.breakpoints.down('sm')]: {
      margin: '30px 10px'
    },
  },

  playerBlocks:{
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
  }
}));

export default useStyles;

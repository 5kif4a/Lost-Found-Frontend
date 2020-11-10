import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
    alignItems: "flex-start",
    minHeight: "100vh",
    maxWidth: "425px",
    marginTop: "25px",
    marginLeft: "29px",
  },

  menuItem: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: "16px",
    "& span": {
      marginLeft: "25px",
      textDecoration: "none",
    },
    "& img": {
        maxWidth: "80px"
    }
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F8F8F8",
    height: "88px",
    paddingLeft: "34px",
    paddingRight: "22px",
  },
  user: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    "& span": {
      color: "#000",
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "15px",
      lineHeight: "18px",
      textAlign: "center",
      marginRight: "5px"
    },
  },
});

export { useStyles };

import { makeStyles } from "@material-ui/core/styles";

export const useDetailItemStyles = makeStyles((theme) => ({
  root: {},
  header: {
    padding: "15px",
    background: "rgba(196, 196, 196, 0.7)"
  },
  h5: {
    marginTop: "6px",
    background: "rgba(196, 196, 196, 0.7)"
  },
  descr: {
    padding: "15px",
    background: "rgba(196, 196, 196, 0.7)",
    marginTop: "16px"
  },
  tags: {
    padding: "20px",
    marginTop: "29px",
    background: "rgba(196, 196, 196, 0.7)",
    fontSize: "20px"
  }
}))
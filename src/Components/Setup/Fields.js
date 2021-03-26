import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { Card } from "@material-ui/core";

const Fields = ({ i, setValues, data, remove }) => {
  const [value, setValue] = useState(data[i]);

  useEffect(() => {
    let datas = data;
    datas[i] = value;
    setValues(datas);
  }, [value,data,i,setValues]);

  return (
    <Card
      style={{
        padding: "20px 25px 40px 25px",
        marginBottom: "10px",
        border: "1px solid #d8d8d8",
      }}
      key={i}
    >
      <Typography variant="h6" gutterBottom>
        Qualification Details {i + 1}
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="deg"
            name="deg"
            label="Degree"
            fullWidth
            autoComplete="degree-name"
            value={value && value.deg ? value.deg : ""}
            onChange={(e) => setValue({ ...value, deg: e.target.value })}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="passOut"
            name="passOut"
            label="Passed Out"
            fullWidth
            autoComplete="passed-out"
            value={value && value.passOut ? value.passOut : ""}
            onChange={(e) => setValue({ ...value, passOut: e.target.value })}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="completedAt"
            name="completedAt"
            label="Completed At"
            fullWidth
            autoComplete="completed-at"
            value={value && value.completedAt ? value.completedAt : ""}
            onChange={(e) =>
              setValue({ ...value, completedAt: e.target.value })
            }
          />
        </Grid>
      </Grid>
      {i!==0 && (
        <button
        style={{
          width: "20px",
          height: "20px",
          background: "#d3d3d3",
          border: "1px solid black",
          padding: "2px",
          borderRadius: "10px",
          position: "relative",
          top: "-175px",
          left: "260px",
        }}
        onClick={()=>{remove(i)}}
      >
        X
      </button>
      )}
    </Card>
  );
};

export default Fields;

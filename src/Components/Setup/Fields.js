import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { Card } from "@material-ui/core";

const Fields = ({ i, setValues, data }) => {
  const [value, setValue] = useState(data[i]);

  useEffect(() => {
    let datas = data;
    datas[i] = value;
    setValues(datas);
  }, [value]);

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
    </Card>
  );
};

export default Fields;

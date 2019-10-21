import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import TagButton from "../Buttons/TagButton";
import useStyles from "./PopularTagsStyles";
import { axiosGet } from "../../network/AXIOS";
interface PopularTagsProps {
  onClick: (tagButton: string) => void;
}
const PopularTags: React.FC<PopularTagsProps> = ({ onClick }) => {
  
  const classes = useStyles();
  const [tags, setTags] = useState<string[]>([]);

  useEffect(() => {
    axiosGet("tags")
      .then(res => {
        setTags(res.data.tags);
      });
    }, []);
  
  return (
    <div className={classes.div}>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} variant="h5" component="h2">
            Popular Tags
          </Typography>
        </CardContent>
          <div className={classes.tagButtonDiv}>
            {tags.map(tag => (
              <TagButton onClick={onClick} name={tag} />
            ))}
          </div>
      </Card>
    </div>
  );
};
export default PopularTags;

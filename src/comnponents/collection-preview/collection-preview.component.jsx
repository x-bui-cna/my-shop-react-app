import React from "react";
import { withRouter } from "react-router-dom";
import CustomButton from "./../custom-button/custom-button.component";
import CollectionItem from "./../collection-item/collection-item.component";
import "./collection-preview.styles.scss";

const CollectionPreview = ({ title, items, match, history, routeName }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
    <div className="view-all">
      <CustomButton
        onClick={() => history.push(`${match.path}/${routeName}`)}
        view
      >
        MORE
      </CustomButton>
    </div>
  </div>
);

export default withRouter(CollectionPreview);

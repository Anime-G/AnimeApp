import { Card, Col, Input, Pagination, Row, Tag, Tooltip } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { ApiBase } from "../Const";
import { Link } from "react-router-dom";
import _ from "lodash";

const Search = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = 6;
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = currentPage * pageSize;
  const [cards, setCards] = useState([]);
  const limit = 1000025;

  function searchArray(arrayOfObjects, searchString) {
    // Convert the search string to lowercase
    const searchLower = searchString.toLowerCase();

    // Initialize an array to store matching objects
    const matches = [];

    // Iterate through the array of objects
    for (const obj of arrayOfObjects) {
      // Iterate through the properties of the object
      for (const key in obj) {
        // Skip the 'description' property
        if (key === "description") continue;

        // Get the value of the property
        const value = obj[key];

        // Check if the value is an object or an array
        if (typeof value === "object") {
          // If it's an object or an array, stringify it, convert it to lowercase, and check if it includes the search string
          const stringValue = JSON.stringify(value).toLowerCase();
          if (stringValue.includes(searchLower)) {
            matches.push(obj);
            // Exit the loop for this object if a match is found
            break;
          }
        } else if (typeof value === "string") {
          // If it's a string, convert it to lowercase and check if it includes the search string
          const valueLower = value.toLowerCase();
          if (valueLower.includes(searchLower)) {
            matches.push(obj);
            // Exit the loop for this object if a match is found
            break;
          }
        }
      }
    }
    // Return the array of matching objects
    return matches;
  }

  function filterObjects(arrayOfObjects, searchString) {
    return _.filter(arrayOfObjects, (obj) => {
      // Check if any property of the object contains the search string
      return _.some(obj, (value) => {
        if (_.isArray(value)) {
          return _.includes(value, searchString);
        } else if (_.isString(value)) {
          return _.includes(value.toUpperCase(), searchString.toUpperCase());
        } else if (_.isObject(value)) {
          return filterObjects([value], searchString.toLowerCase()).length > 0;
        }
        return false;
      });
    });
  }
  const onsearch = (e) => {
    if (e.target.value) {
      const searchResult = searchArray(cards, e.target.value);
      setCards(searchResult);
    } else {
      getAnimedetails();
    }
  };
  const getAnimedetails = async () => {
    const data = await axios.get(ApiBase + "/Animes/top/" + limit);
    setCards(data.data);
  };
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderCards = () => {
    return cards.slice(startIndex, endIndex).map((item, index) => {
      const Details = (
        <div
          style={{
            display: "flex",
            gap: "20px",
          }}
        >
          <img
            src={item.pic}
            style={{ margin: "10", borderRadius: "5px" }}
            height="250"
            width="auto"
          />
          <div>
            {item.title.toUpperCase() + " "}
            <Tag
              bordered={false}
              style={{
                color: "white",
                background: !item.status ? "skyblue" : "mediumseagreen",
              }}
            >
              {!item.status ? "Continue" : "Complete"}
            </Tag>
            <hr />
            <Tooltip placement="right" style={{}} title={item.description}>
              Description:
              <div
                style={{
                  width: "200px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {item.description}
              </div>
            </Tooltip>

            <tt style={{ fontSize: 10, margin: 0 }}>
              Author: {item.Authors.map((item) => item.name).join(", ")}
            </tt>
            <p style={{ fontSize: 10 }}>
              Studio: {item.Studios.map((item) => item.name).join(", ")}
            </p>
            <p style={{ fontSize: 10 }}>Type: {item.Type.name.toUpperCase()}</p>
            <p style={{ fontSize: 10 }}>Rate: {item.Rate.title}</p>
            <p style={{ fontSize: 10 }}>
              Generes: {item.Generes.map((item) => item.Title).join(", ")}
            </p>
          </div>
        </div>
      );
      return (
        <Link key={item.id} to={"/Anime/" + item.id}>
          <Card
            key={index}
            style={{
              margin: 20,
              background: "rgba(255,255,255,.4)",
              color: "white",
              width: "fit-content",
              height: "250px",
              position: "relative",
              borderRadius: "10px",
            }}
            cover={
              <Tooltip
                autoAdjustOverflow="false"
                overlayStyle={{ minWidth: "400px", cursor: "pointer" }}
                placement="right"
                title={Details}
              >
                <img alt="example" src={item.pic} height={250} />{" "}
              </Tooltip>
            }
            hoverable
          >
            <Tag
              bordered={false}
              className="heartbeat-icon"
              style={{
                position: "absolute",
                right: 5,
                width: 20,
                height: 20,
                top: 5,
                borderRadius: "50%",
                background: !item.status ? "skyblue" : "mediumseagreen",
                opacity: 0.8,
              }}
              title={!item.status ? "Continue" : "Complete"}
            ></Tag>
            <div
              style={{
                background: "rgba(0,0,0,.65)",
                display: "block",
                width: "100%",
                left: 0,
                position: "absolute",
                bottom: 0,
                padding: 0,
                border: "2px black",
                textAlign: "center",
              }}
            >
              {item.title}
            </div>
          </Card>
        </Link>
      );
    });
  };
  useEffect(() => {
    getAnimedetails();
  }, []);
  return (
    <div>
      <h1>Search</h1>
      <Row style={{ width: "100%" }}>
        <Input
          onChange={(e) => onsearch(e)}
          placeholder="Search the Anime By (Author,name,Genere,type)"
          allowClear
          style={{ width: "30%", margin: "0px auto" }}
        />

        <Col span={24}>
          <div
            style={{
              background: "rgba(0,0,0,.7)",
              padding: "20px",
              margin: "15px",
              borderRadius: "9px",
            }}
          >
            <div style={{ textAlign: "right", marginTop: 20 }}>
              <Pagination
                current={currentPage}
                total={cards?.length}
                pageSize={pageSize}
                onChange={handlePageChange}
                showSizeChanger={false}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              {renderCards()}
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Search;

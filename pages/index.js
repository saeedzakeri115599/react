/********************************************************************************* 
*  WEB422 – Assignment 6 
*  I declare that this assignment is my own work in accordance with Seneca Academic Policy.   
*  No part of this assignment has been copied manually or electronically from any other source 
*  (including web sites) or distributed to other students. 
*  
*  Name: saeed zakeri Student ID: 111339214 Date: 12/05/2022 
* 
* 
********************************************************************************/ 
import { Row, Col, Image } from "react-bootstrap";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Image
        className="fluid rounded w-100"
        alt="Metropolitan Museum"
        src="https://upload.wikimedia.org/wikipedia/commons/3/30/Metropolitan_Museum_of_Art_%28The_Met%29_-_Central_Park%2C_NYC.jpg"
      />

      <Row className="mt-4">
        <Col md={6}>
          <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. 
          It has roots in a piece of classical Latin literature from 45 BC, 
          making it over 2000 years old. Richard McClintock, a Latin professor at 
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going through
          the cites of the word in classical literature, discovered the undoubtable source.
          Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum 
          et Malorum" The Extremes of Good and Evil by Cicero, written in 45 BC. 
          This book is a treatise on the theory of ethics, very popular during the
          Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", 
          comes from a line in section 1.10.32.
          </p>

          <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. 
          It has roots in a piece of classical Latin literature from 45 BC, 
          making it over 2000 years old. Richard McClintock, a Latin professor at 
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going through
          the cites of the word in classical literature, discovered the undoubtable source.
          Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum 
          et Malorum" The Extremes of Good and Evil by Cicero, written in 45 BC. 
          This book is a treatise on the theory of ethics, very popular during the
          Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", 
          comes from a line in section 1.10.32.
          </p>
        </Col>
        <Col md={6}>
          <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. 
          It has roots in a piece of classical Latin literature from 45 BC, 
          making it over 2000 years old. Richard McClintock, a Latin professor at 
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going through
          the cites of the word in classical literature, discovered the undoubtable source.
          Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum 
          et Malorum" The Extremes of Good and Evil by Cicero, written in 45 BC. 
          This book is a treatise on the theory of ethics, very popular during the
          Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", 
          comes from a line in section 1.10.32.
          </p>
          <Link
            target="_blank"
            href="https://en.wikipedia.org/wiki/Metropolitan_Museum_of_Art"
          >
            https://en.wikipedia.org/wiki/Metropolitan_Museum_of_Art
          </Link>
        </Col>
      </Row>
    </>
  );
}

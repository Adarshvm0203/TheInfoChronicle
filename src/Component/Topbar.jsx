import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

function TopBar() {
  const containerStyle = {
    marginTop: "20px", // Adjust the margin-top value as needed
  };
  return (
    <Container style={containerStyle}>
      <Row
        className="justify-content-center align-items-center"
        
      >
        <Col xs={6} md={4} className="text-center">
          <Image
            src="/assets/tic.png"
            roundedCircle
            style={{ width: "171px", height: "180px" }}
          />
        </Col>
      </Row>
      <h2 className="mt-3 font-weight-bold text-center" style={{ margin: "10px" }}>
      The InfoChronicle
      </h2>
      <p style={{ margin: "10px" }} className="text-center">
        Bringing the world to your fingertips, one headline at a time.
      </p>
    </Container>
  );
}

export default TopBar;

import { Description } from "../../components/description/styles";
import { Form } from "../../components/form";
import { Grid, Section } from "../../components/layout/styles";
import { Title } from "../../components/title/styles";

const Contact = () => {
  return (
    <Section>
      <Grid width="270px" gap="3rem">
        <div>
          <Title>Connect with me:</Title>
          <Description>Satisfied with me? Please contact me!</Description>
          <div></div>
        </div>
        <Form/>
      </Grid>
    </Section>
  );
};

export default Contact;

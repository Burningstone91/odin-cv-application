import InputGroup from "./InputGroup";

function ShortProfile({ onChange, short1, short2, short3, short4 }) {
  return (
    <div className="short-profile">
      <h2>Short Profile</h2>
      <form>
        <InputGroup
          onChange={onChange}
          value={short1}
          name="short1"
          label="First Short Profile"
          type="textarea"
          placeholder="Enter first short profile"
          dataKey="short1"
        />
        <InputGroup
          onChange={onChange}
          value={short2}
          name="short2"
          label="First Short Profile"
          type="textarea"
          placeholder="Enter second short profile"
          dataKey="short2"
        />
        <InputGroup
          onChange={onChange}
          value={short3}
          name="short3"
          label="First Short Profile"
          type="textarea"
          placeholder="Enter third short profile"
          dataKey="short3"
        />
        <InputGroup
          onChange={onChange}
          value={short4}
          name="short4"
          label="First Short Profile"
          type="textarea"
          placeholder="Enter fourth short profile"
          dataKey="short4"
        />
      </form>
    </div>
  );
}

export default ShortProfile;

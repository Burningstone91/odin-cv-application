import InputGroup from "./InputGroup";

function PersonalDetails({
  onChange,
  fullName,
  address,
  phone,
  email,
  linkedin,
  github,
  birthday,
}) {
  return (
    <div className="personal-details">
      <h2>Personal Details</h2>
      <form>
        <InputGroup
          onChange={onChange}
          value={fullName}
          name="full-name"
          label="Full Name"
          type="text"
          placeholder="First and last name"
          dataKey="fullName"
        />
        <InputGroup
          onChange={onChange}
          value={address}
          name="address"
          label="Address"
          type="text"
          placeholder="Enter address"
          dataKey="address"
        />
        <InputGroup
          onChange={onChange}
          value={phone}
          name="phone"
          label="Phone"
          type="tel"
          placeholder="Enter phone number"
          dataKey="phone"
        />
        <InputGroup
          onChange={onChange}
          value={email}
          name="email"
          label="E-Mail"
          type="email"
          placeholder="Enter E-Mail"
          dataKey="email"
        />
        <InputGroup
          onChange={onChange}
          value={linkedin}
          name="linkedin"
          label="LinkedIn"
          type="url"
          placeholder="Enter LinkedIn Profile"
          dataKey="linkedin"
        />
        <InputGroup
          onChange={onChange}
          value={github}
          name="github"
          label="Github"
          type="url"
          placeholder="Enter GitHub repo"
          dataKey="github"
        />
        <InputGroup
          onChange={onChange}
          value={birthday}
          name="birthday"
          label="Birthday"
          type="date"
          placeholder="MM/DD/YYYY"
          dataKey="birthday"
        />
      </form>
    </div>
  );
}

export default PersonalDetails;

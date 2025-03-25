import * as React from "react";
import "./style.css";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const packages = [
  {
    title: "Basic",
    price: "$29",
    users: "per user, per month",
    features: [
      "99.5% Uptime Guarantee",
      "120GB CDN Bandwidth",
      "5GB Cloud Storage",
      "Personal Help Support",
      "Enterprise SLA",
    ],
    buttonText: "Start Basic",
  },
  {
    title: "Standard",
    price: "$49",
    users: "per user, per month",
    features: [
      "99.5% Uptime Guarantee",
      "150GB CDN Bandwidth",
      "10GB Cloud Storage",
      "Personal Help Support",
      "Enterprise SLA",
    ],
    buttonText: "Start Standard",
  },
  {
    title: "Platinum",
    price: "$79",
    users: "2 user, per month",
    features: [
      "100% Uptime Guarantee",
      "200GB CDN Bandwidth",
      "20GB Cloud Storage",
      "Personal Help Support",
      "Enterprise SLA",
    ],
    buttonText: "Start Platinum",
  },
];

export default function Packages() {
  const [selectedPackage, setSelectedPackage] = React.useState<string | null>(
    null
  );

  return (
    <div className="packages-container">
      <h2 className="title">Select Your Package</h2>
      <p className="description">
        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
        praesentium
      </p>
      <div className="packages-grid">
        {packages.map((pkg, index) => (
          <div key={index} className="package-card">
            <h3 className="package-title">{pkg.title}</h3>
            <h1 className="package-price">{pkg.price}</h1>
            <p className="package-users">{pkg.users}</p>
            <FormGroup>
              {pkg.features.map((feature, idx) => (
                <FormControlLabel
                  key={idx}
                  control={
                    <Checkbox className="custom-checkbox" defaultChecked={idx < 3} />
                  }
                  label={feature}
                />
              ))}
            </FormGroup>
            <button
              className={`btn5 ${selectedPackage === pkg.title ? "selected" : ""}`}
              onClick={() =>
                setSelectedPackage(selectedPackage === pkg.title ? null : pkg.title)
              }
            >
              {selectedPackage === pkg.title ? "Selected" : pkg.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

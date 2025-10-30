//dependent_dropdown.js
//Gives Specific Subcategories based on Category selected

const subcategories = {
    //COMPENSATION
    "1": ["1.1 Compulsory Purchase", "1.2 Land Compensation Act 1973 Part I", "1.3 Mining subsidence",
"1.4 Electricity", "1.5 Water", "1.6 Purchase Notice", "1.7 Tree Preservation Orders", "1.8 Home Loss Payments",
"1.9 Severance", "1.10 Injurous Affection", "1.11 Disturbance", "1.12 Valution Method", "1.13 Scheme", "1.14 Hope Value", "1.15 Ransom Value",
"1.16 Comparables", "1.17 Planning Permission", "1.18 Blight", "1.19 Extinguishment", "1.20 Dwelling House","1.21 Unfit House", "1.22 Right of Way",
"1.23 Agricultural Land", "1.24 Minerals", "1.25 Petrol Filling Stations", "1.26 Shop", "1.27 Road Noise", "1.28 Limitation", "1.29 Interest", "1.30 Procedure",
"1.31 Costs", "1.32 Stop Notice", "1.33 Demolition Order", "1.34 Preliminary Issue", "1.35 Prohibition Order"],
    
//RATING
    "2": ["2.1 Valuation", "2.2 Exemption", "2.3 Alteration of rating list", "2.4 Comparables", "2.5 Hereditament",
"2.6 Occupation", "2.7 Shop", "2.8 Public house", "2.9 Club", "2.10 Holiday cottage", "2.11 Procedure", "2.12 Costs", "2.13 Proposal",
"2.14 College premises", "2.15 Drainage rates", "2.16 Rateable property", "2.17 Plant and Machinery"],
    
//RESTRICTIVE COVENANTS
    "3": ["3.1 Discharge", "3.2 Modification", "3.3 Obsoleteness", "3.4 Practical benefits of substantial value or advantage", 
"3.5 Public interest", "3.6 Consent", "3.7 Injury to objector", "3.8 Consideration", "3.9 Compensation",
"3.10 House", "3.11 Flat", "3.12 Alterations to house", "3.13 Agricultural building", "3.14 Home for elderly", "3.15 Procedure",
"3.16 Costs", "3.17 Jurisdiction", "3.18 Entitlement to benefit", "3.19 Preliminary issue"],
    
//LEASEHOLD ENFRANCHISEMENT
    "4": ["4.1 Collective enfranchisement", "4.2 House", "4.3 Flat", "4.4 Price", "4.5 Premium", "4.6 Comparables",
"4.7 Standing house value", "4.8 Site value", "4.9 Intermediate leasehold interest", "4.10 Development potential",
"4.11 Ground rent", "4.12 Yield rates", "4.13 Capitalisation rate", "4.14 Deferment rate", "4.15 Marriage value",
"4.16 Hope value", "4.17 Terms of transfer", "4.18 Restrictive covenant", "4.19 Garage", "4.20 Procedure",
"4.21 Costs", "4.22 Right to manage", "4.23 Special purchaser", "4.24 Estate charges"],
    
//LANDLORD AND TENANT
    "5": ["5.1 Service Charges", "5.2 Insurance", "5.3 Appointment of manager", "5.4 Right to manage",
"5.5 Administrative Charge", "5.6 Purchase notice", "5.7 Breach of covenant", "5.8 Acquisition by tenant of new lease",
"5.9 Variation of lease", "5.10 FTT procedure", "5.11 Rent Determination", "5.12 Agricultural Holdings Act 1986"],
    
//BLIGHT NOTICE
    "6": ["6.1 Blight notice", "6.2 Preliminary Issue"],
    
//TAX
    "7": ["7.1 Inheritance tax", "7.2 Capital gains tax", "7.3 Comparables", "7.4 House",
"7.5 Hotel", "7.6 Procedure", "7.7 Costs"],
    
//EASEMENT
    "8": ["8.1 Countryside and Right of Way Act 2000"],
    
//ARBITRATION
    "9": ["9.1 Access rights"],
    
//COSTS
    "10": ["10.1 Preliminary issues", "10.2 Preliminary issues ", "10.3 Right to Manage"],
    
//HOUSING
    "16": ["16.1 Emergency remedial action", "16.2 Prohibition Notice", "16.3 Enforcement action",],
    
//PARK HOMES
    "19": ["19.1 Administration Charges", "19.2 Pitch Fee Review", "19.3 Sale, assignment and succession",
"19.4 Site Rules", "19.5 Procedure", "19.6 Water Charges", "19.7 Site Licencing", "19.8 Jurisdiction", "19.9 Electricity Charges"],
    
//LAND REGISTRATION
    "25": ["25.1 Unilateral notice", "25.2 Adverse possession", "25.3 Alteration and rectification",
"25.4 Beneficial interests, trusts and restrictions", "25.5 Boundary disputes", "25.6 Charges and charging orders",
"25.7 Contracts and options", "25.8 Costs", "25.9 Easement and profits", "25.10 Fraud, forgery, duress and undue influence",
"25.11 Practice and Procedure", "25.12 Rectification or setting aside of documents", "25.13 Title to land"],
    
//ELECTRONIC COMMUNICATIONS CODE
    "26": ["26.1 Jurisdiction", "26.2 Interim Code Rights", "26.3 Code rights", "26.4 Temporary Code rights",
"26.5 Consideration", "26.6 Compensation", "26.7 Other", "26.8 New agreement or modification"],

//INTERIM RIGHTS
//No subcategories for this category
    "27": ["No subcategories"],

//ELECTRICITY CHARGES
//No subcategories for this category
    "28": ["No subcategories"],

//BUILDING SAFETY
    "29": ["29.1 REMEDIATION CONTRIBUTION ORDER", "29.2 Accountable Person", "29.3 LEASEHOLDER PROTECTION"],
};
//Add Comments to explain structure below:

// Wait for DOM ready
document.addEventListener('DOMContentLoaded', function() {
    // Select elements
    const categorySelect = document.getElementById('category');
    const subcategorySelect = document.getElementById('subcategory');

    // Exit if elements missing
    if (!categorySelect || !subcategorySelect) return;

    // Update subcategory options when category changes
    categorySelect.addEventListener('change', function() {
        const selectedCategory = categorySelect.value;
        const options = subcategories[selectedCategory] || [];

        // Clear existing options
        subcategorySelect.innerHTML = '';

        // Add new options
        options.forEach(function(sub) {
            const option = document.createElement('option');
            option.value = sub;
            option.textContent = sub;
            subcategorySelect.appendChild(option);
        });
    });

});

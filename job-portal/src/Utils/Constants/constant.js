export const HeaderJSON = {
    headerTitle1: 'Job',
    headerTitle2:'Solutions',
    HeaderLabelList:[
        {
            lable:"Find jobs",
            isActive:false
        },
        {
            lable:"Company Reviews",
            isActive:false
        },
        {
            lable:"Skils Tests",
            isActive:false
        },
    ]
};

export const FooterJSON = [
	{
		footerTitle: 'Job Seeker', 
		footerLabelList:[
            {
                lable:"Post Resume",
                isActive:false,
                isIcon:false
            },
            {
                lable:"Login",
                isActive:false,
                isIcon:false
            },
            {
                lable:"Fast Track Carrer",
                isActive:false,
                isIcon:false
            },
            {
                lable:"Resumen Edge",
                isActive:false,
                isIcon:false
            },
            {
                lable:"Premium Seeker",
                isActive:false,
                isIcon:false
            },
        ]
	},
	{
		footerTitle:'',
		footerLabelList:[
            {
                lable:"Testimonials",
                isActive:false,
                isIcon:false
            },
            {
                lable:"Feedback",
                isActive:false,
                isIcon:false
            },
            {
                lable:"Complaints",
                isActive:false,
                isIcon:false
            },
            {
                lable:"Terms & Conditions",
                isActive:false,
                isIcon:false
            },
            {
                lable:"FAQ",
                isActive:false,
                isIcon:false
            },
        ]
	},
	{
		footerTitle:'Recuriter',
		footerLabelList:[
            {
                lable:"Register Now",
                isActive:false,
                isIcon:false
            },
            {
                lable:"Posts Jobs For Free",
                isActive:false,
                isIcon:false
            },
            {
                lable:"Free Resume Search",
                isActive:false,
                isIcon:false
            },
            {
                lable:"Resume Database",
                isActive:false,
                isIcon:false
            },
            {
                lable:"Package",
                isActive:false,
                isIcon:false
            },
            {
                lable:"Branding Solutions",
                isActive:false,
                isIcon:false
            },
        ]
	},
	{
		footerTitle:'',
		footerLabelList:[
            {
                lable:"Feedback",
                isActive:false,
                isIcon:false
            },
            {
                lable:"Complaints",
                isActive:false,
                isIcon:false
            },
            {
                lable:"Recuiter",
                isActive:false,
                isIcon:false
            },
            {
                lable:"Testimonials",
                isActive:false,
                isIcon:false
            },
            {
                lable:"Terms & Conditions",
                isActive:false,
                isIcon:false
            },
            {
                lable:"FAQ",
                isActive:false,
                isIcon:false
            },
        ]
	},
	{
        
		footerTitle:'Contact with us',
		footerLabelList:[
            {
                icon:"fa fa-facebook-square",
                isActive:false,
                isIcon:true
            },
            {
                icon:"fa fa-twitter-square",
                isActive:false,
                isIcon:true
            },
            {
                icon:"fa fa-linkedin-square",
                isActive:false,
                isIcon:true
            },
            {
                icon:"fa fa-youtube-play",
                isActive:false,
                isIcon:true
            },
        ]
	}
]

export const SidebarJSON = [
        {
            icon:"fa fa-file-text",
            lable:"Jobs Search",
            isActive:false
        },
        {
            icon:"fa fa-tachometer",
            lable:"Dashboard",
            isActive:false
        },
        {
            icon:"fa fa-inbox",
            lable:"Inbox",
            isActive:false
        },
        {
            icon:"fa fa-crosshairs",
            lable:"Package",
            isActive:false
        },
        {
            icon:"fa fa-cog",
            lable:"Setting",
            isActive:false
        },
];
export const companyRegisterJSON = [
    {
        label:"Name",
        type:"text",
        text:"name",
        isActive:false,
        isRequired:true,
        className:"c-input-text",
        placeHolder:'Please Enter Name',
        isError:false

    },
    {
        label:"User Name",
        type:"text",
        text:"userName",
        isActive:false,
        isRequired:true,
        className:"c-input-text",
        placeHolder:'Please Enter Name',
        isError:false

    },
    {
        label:"Email",
        type:"email",
        text:'email',
        isActive:false,
        isRequired:true ,
        className:"c-input-text",
        placeHolder:'Please Enter Email',
        isError:false

    },
    {
        label:"Password",
        type:"password",
        text:'password',
        isActive:false,
        isRequired:true ,
        className:"c-input-text",
        placeHolder:'Please Enter Password',
        isError:false

    },
    {
        label:"Mobile No",
        type:"number",
        isActive:false,
        isRequired:true,
        text:'mobileNumber',
        className:"c-input-text",
        placeHolder:'Please Enter Mobile No',
        isError:false 

    },
    {
        label:"Address",
        type:"text",
        isActive:false,
        text:'address',
        isRequired:false,
        className:"c-input-text",
        placeHolder:'Please Enter Address',
        isError:false

    },
    {
        label:"City",
        type:"dropDown",
        isActive:false,
        text:'cityId',
        isRequired:false,
        className:"c-input-text",
        placeHolder:'Please Enter City',
        isError:false

    },
    {
        label:"District",
        type:"dropDown",
        isActive:false,
        text:'districtId',
        isRequired:false,
        className:"c-dropdown",
        isError:false

    },
    {
        label:"State",
        type:"dropDown",
        isActive:false,
        text:'stateId',
        isRequired:false,
        className:"c-dropdown",
        isError:false

    },
    
    {
        label:"PinCode",
        type:"text",
        isActive:false,
        isRequired:false,
        text:'pinCode',
        className:"c-input-text",
        placeHolder:'Please Enter PinCode',
        isError:false

    },
    {
        label:"PanCard No",
        type:"text",
        isActive:false,
        isRequired:false,
        text:'panCardNumber',
        className:"c-input-text",
        placeHolder:'Please Enter PanCard No',
        isError:false

    },
    {
        label:"Business Location",
        type:"text",
        isActive:false,
        isRequired:false,
        text:'businessLocation',
        className:"c-input-text",
        placeHolder:'Please Enter Business Location',
        isError:false

    },
    {
        label:"GST No",
        type:"text",
        isActive:false,
        isRequired:false,
        text:'gstNumber',
        className:"c-input-text",
        placeHolder:'Please Enter GST No',
        isError:false

    },
    {
        label:"Logo",
        type:"file",
        isActive:false,
        isRequired:false,
        text:'logo',
        className:"c-input-text",
        isError:false

    }
]

export const candidateRegisterJSON = [
    {
        label:"Upload Resume (*.doc, *.docx, *.rtf, *.txt, *.pdf) 6 MB max",
        type:"file",
        isActive:false,
        isRequired:true,
        text:'resume',
        className:"c-input-text",
        placeHolder:'Please Upload Resume',
        isError:false

    },{
        label:"Full Name",
        type:"text",
        isActive:false,
        text:'name',
        isRequired:true,
        className:"c-input-text",
        placeHolder:'Please Enter Full Name',
        isError:false

    },
    {
        label:"User Name",
        type:"text",
        isActive:false,
        text:'userName',
        isRequired:true,
        className:"c-input-text",
        placeHolder:'Please Enter Full Name',
        isError:false

    },
    {
        label:"Email",
        type:"email",
        text:'email',
        isActive:false,
        isRequired:true ,
        className:"c-input-text",
        placeHolder:'Please Enter Email',
        isError:false

    },
    {
        label:"Password",
        type:"password",
        text:'password',
        isActive:false,
        isRequired:true ,
        className:"c-input-text",
        placeHolder:'Please Enter Password',
        isError:false

    },
    {
        label:"Mobile No",
        type:"number",
        text:'mobileNumber',
        isActive:false,
        isRequired:true,
        className:"c-input-text",
        placeHolder:'Please Enter Mobile No' ,
        isError:false

    },
    {
        label:"Current Location",
        type:"text",
        isActive:false,
        isRequired:false,
        text:'location',
        className:"c-input-text",
        placeHolder:'Please Enter Current Location',
        isError:false

    },
    {
        label:"Total Experience",
        type:"text",
        isActive:false,
        text:'exp',
        isRequired:false,
        className:"c-input-text",
        placeHolder:'Please Enter Total Experience ',
        isError:false

    },
    {
        label:"Key Skills",
        type:"text",
        isActive:false,
        text:'skillSet',
        isRequired:false,
        className:"c-input-text",
        placeHolder:'Please Enter Key Skills',
        isError:false

    }
]
export  const companyInitialValues = {
    address: "",
    businessLocation: "",
    cityId: 0,
    districtId: 0,
    email: "",
    gstNumber:"",
    logo: "",
    mobileNumber: "",
    name: "",
    panCardNumber: "",
    password: "",
    pinCode:"",
    stateId:0,
    userName:"",
};
export  const candidateInitialStateValues = {
  address: "",
  cityId: 0,
  client: "",
  companyName: "",
  course: "",
  courseDuration: "",
  courseType: "",
  createdOn: "2023-03-02",
  ctc: "",
  current: true,
  currentCtc: "",
  dateOfBirth: "",
  description: "",
  designation: "",
  districtId: 0,
  education: "",
  email: "",
  employmentType: "",
  endDate: "",
  expectedCtc: "",
  gradingSystem: "",
  jobProfile: "",
  joingDate: "",
  language: "",
  level: "",
  location: "",
  marks: 0,
  mobileNumber: "",
  modifiedOn: "",
  name: "",
  natureOfEmployement: "",
  noticePeriod: "",
  panCard: "",
  password: "",
  pinCode: 0,
  projectEndDate: "",
  projectStartDate: "",
  projectStatus: true,
  read: true,
  resume: "",
  role: "",
  roleDescription: "",
  skillSet: "",
  speak: true,
  specialization: "",
  stateId: 0,
  status: true,
  teamSize: 0,
  title: "",
  university: "",
  userName:"",
  write: true
};

export const otpModalJSON = [
    {
        label:"OTP",
        type:"text",
        isActive:false,
        isRequired:true,
        text:'otp',
        className:"c-input-text",
        placeHolder:'Please Enter otp',
        isError:false

    }
]

export const stateUrl = "https://appts.in/jobportal/state/all";
export const districtUrl  = "https://appts.in/jobportal/district/by?stateId=";
export const cityUrl = "https://appts.in/jobportal/city/by?districtId=";
export const companyRegisterUrl = "https://appts.in/jobportal/company/register";
export const candidateRegisterUrl = "https://appts.in/jobportal/candidate/registeration";
export const loginUrl = "https://appts.in/jobportal/auth/signin";
export const companyOTP = "https://appts.in/jobportal/company/enterotp";
export const candidateOtp = "https://appts.in/jobportal/candidate/enterotp";
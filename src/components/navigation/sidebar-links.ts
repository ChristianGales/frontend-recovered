  // import {
  //     Home,
  //     Inbox,
  //     LayoutDashboard,
  //     Settings,
  //     ShieldCogCorner,
  //     Table2,
  //     Calendar,
  //     ShieldCheck,
  //     User,
  //     BookOpen,
  //     ClipboardList,
  //   } from "lucide-react"
    
  //   export const SideBarLinks = {
  //     main: [
  //       {
  //         title: "Dashboard",
  //         url: "/dashboard",
  //         icon: Home,
  //         visible: ["admin", "student", "college_registrar"],
  //       },
  //       {
  //         title: "RBAC",
  //         url: "/rbac",
  //         icon: ShieldCogCorner,
  //         visible: ["admin"],
  //       },
  //       {
  //         title: "Inbox",
  //         url: "#",
  //         icon: Inbox,
  //         badge: 23,
  //         visible: ["admin", "student", "college_registrar"],
  //       },
  //       {
  //         title: "Admissions",
  //         url: "/admissions",
  //         icon: ShieldCheck,
  //         badge: 5,
  //         visible: ["college_registrar"],
  //       },
  //       {
  //         title: "Schedule",
  //         url: "/schedule",
  //         icon: Calendar,
  //         visible: ["student"],
  //       },
  //       {
  //         title: "Enrollment",
  //         url: "/enrollment",
  //         icon: ClipboardList,
  //         visible: ["student"],
  //       },
  //       {
  //         title: "Components",
  //         url: "/scomponents",
  //         icon: LayoutDashboard,
  //         visible: ["admin"],
  //       },
  //       {
  //         title: "Tables",
  //         url: "/table",
  //         icon: Table2,
  //         visible: ["admin"],
  //       },
  //       {
  //         title: "Settings",
  //         url: "#",
  //         icon: Settings,
  //         visible: ["admin", "student", "college_registrar"],
  //       },
  //     ],
    
  //     pages: [
  //       {
  //         title: "Blank",
  //         url: "/blank",
  //       },
  //       {
  //         title: "Maintenance",
  //         url: "/maintenance",
  //       },
  //       {
  //         title: "404 Page",
  //         url: "/unknown-page",
  //       },
  //       {
  //         title: "Privacy Policy",
  //         url: "/privacy-policy",
  //       },
  //       {
  //         title: "Programs",
  //         url: "/programs",
  //       },
  //     ],
    
  //     auth: [
  //       {
  //         title: "Login",
  //         url: "/login",
  //       },
  //       {
  //         title: "Register",
  //         url: "/registration",
  //       },
  //       {
  //         title: "OTP Verification",
  //         url: "/otp",
  //       },
  //       {
  //         title: "Forgot Password",
  //         url: "/forgot-password",
  //       },
  //       {
  //         title: "Reset Password",
  //         url: "/reset-password",
  //       },
  //     ],
  //   }
    
  //   export const studentSidebarLinks = {
  //     main: [
  //       {
  //         title: "Profile",
  //         url: "/students/profile",
  //         icon: User,
  //       },
  //       {
  //         title: "Schedule",
  //         url: "/students/schedule",
  //         icon: Calendar,
  //       },
  //       {
  //         title: "Enrollment",
  //         url: "/students/enrollment",
  //         icon: ClipboardList,
  //       },
  //     ],
  //   }


  //   export const collegeRegistrarSidebarLinks = {
  //     main: [
  //       {
  //         title: "Dashboard",
  //         url: "/registrar/college/",
  //         icon: LayoutDashboard,
  //       },
  //       {
  //         title: "adminssions",
  //         url: "/registrar/college/admission",
  //         icon: BookOpen,
  //         badge: 5,
  //       },
  //     ],
      
  //   }




  import {
    Home,
    Inbox,
    LayoutDashboard,
    Settings,
    ShieldUser,
    Table2,
    Calendar,
    ShieldCheck,
    ClipboardList,
    Users,
    BookOpen,
    GraduationCap,
    Building2,
    DollarSign,
    CreditCard,
    FileText,
    BookMarked,
    UserCog,
    BarChart3,
    ClipboardCheck,
    School,
    Wallet,
    FileMinus,
    Boxes,
  } from "lucide-react"
  
  export const SideBarLinks = {
    main: [
      // ─── Universal ───────────────────────────────────────────
      {
        title: "Dashboard",
        url: "/admin",
        icon: Home,
        visible: [
          "admin"
        ],
      },
  
      // ─── admin only ───────────────────────────────────────────
      {
        title: "RBAC",
        url: "/admin/rbac",
        icon: ShieldUser,
        visible: ["admin"],
      },
      {
        title: "Users",
        url: "/admin/user",
        icon: UserCog,
        visible: ["admin"],
      },
      {
        title: "Departments",
        url: "/admin/department",
        icon: Building2,
        visible: ["admin"],
      },
      {
        title: "Designations",
        url: "/admin/designation",
        icon: Users,
        visible: ["admin"],
      },
      {
        title: "Rooms",
        url: "/admin/room",
        icon: School,
        visible: ["admin"],
      },
      {
        title: "Reports",
        url: "/reports",
        icon: BarChart3,
        visible: ["admin"],
      },
      {
        title: "Components",
        url: "/scomponents",
        icon: LayoutDashboard,
        visible: ["admin"],
      },
      {
        title: "Tables",
        url: "/table",
        icon: Table2,
        visible: ["admin"],
      },
  
      // ─── college_registrar ────────────────────────────────────
      {
        title: "Dashboard",
        url: "/registrar/college",
        icon: LayoutDashboard,
        visible: ["college_registrar", "college_head_registrar"],
      },
      {
        title: "Admissions",
        url: "/registrar/college/admissions",
        icon: ShieldCheck,
        badge: 5,
        visible: ["college_registrar", "college_head_registrar"]
      },
      {
        title: "Enrollment",
        url: "/registrar/college/enrollment",
        icon: ClipboardList,
        visible: ["college_registrar", "college_head_registrar"],
      },
      {
        title: "students",
        url: "/registrar/college/students",
        icon: GraduationCap,
        visible: ["college_registrar",  "college_head_registrar"],
      },
      {
        title: "Curriculum",
        url: "/registrar/college/curriculum",
        icon: BookMarked,
        visible: ["college_registrar",  "college_head_registrar"],
      },
      {
        title: "Courses",
        url: "/registrar/college/course",
        icon: BookOpen,
        visible: ["college_registrar",  "college_head_registrar"],
      },
      {
        title: "Subjects",
        url: "/registrar/college/subject",
        icon: FileText,
        visible: ["college_registrar",  "college_head_registrar"],
      },
      {
        title: "Classes",
        url: "/registrar/college/classes",
        icon: School,
        visible: ["college_registrar",  "college_head_registrar"],
      },
      {
        title: "Transcript",
        url: "/registrar/college/transcript",
        icon: FileMinus,
        visible: [ "college_registrar",  "college_head_registrar"]
      },
      
      // ─── BASIC ED REGISTRAR ────────────────────────────────────
      {
        title: "Dashboard",
        url: "/registrar/basic-ed",
        icon: LayoutDashboard,
        visible: ["basic_education_registrar"],
      },
      {
        title: "Admissions",
        url: "/registrar/college/admissions",
        icon: ShieldCheck,
        badge: 5,
        visible: ["basic_education_registrar"],
      },
      {
        title: "Enrollment",
        url: "/registrar/college/enrollment",
        icon: ClipboardList,
        visible: ["basic_education_registrar"],
      },
      //Drop Down Elementary, Junior High, Senior High
      {
        title: "students",
        url: "/registrar/college/students",
        icon: GraduationCap,
        visible: ["basic_education_registrar"],
      },
      {
        title: "Curriculum",
        url: "/registrar/college/curriculum",
        icon: BookMarked,
        visible: ["basic_education_registrar"],
      },
      {
        title: "Grade Level",
        url: "/registrar/college/courses",
        icon: BookOpen,
        visible: ["basic_education_registrar"],
      },
      {
        title: "Subjects",
        url: "/registrar/college/subjects",
        icon: FileText,
        visible: ["basic_education_registrar"],
      },
      {
        title: "Classes",
        url: "/registrar/college/classes",
        visible: ["basic_education_registrar"],
      },
      {
        title: "Section",
        url: "/registrar/college/section",
        icon: Boxes,
        visible: ["basic_education_registrar"]
      },
      {
        title: "Report Card",
        url: "registrar/basic-ed/reportCard",
        icon: FileText,
        visible: ["basic_education_registrar"]

      },
      // ─── teacher ──────────────────────
      {
        tiitle: "Dashboard",
        url: "faculty/teacher",
        icon: LayoutDashboard,
        visible: ["teacher"] 
      },
      {
        title: "Schedule",
        url: "/my-classes",
        icon: ClipboardCheck,
        visible: ["teacher"],
      },
      {
        title: "Grades",
        url: "/grades",
        icon: FileText,
        visible: ["teacher"],
      },
      {
        title: "Report Card",
        url: "/grades",
        icon: FileText,
        visible: ["teacher"],
      },

      // ─── instructor ──────────────────────
      {
        title: "Dashboard",
        url: "faculty/instructor",
        icon: LayoutDashboard,
        visible: ["instructor"] 
      },
      {
        title: "Schedule",
        url: "/my-classes",
        icon: Calendar,
        visible: ["instructor"],
      },
      {
        title: "Classes",
        url: "/grades",
        icon: Building2,
        visible: ["instructor"],
      },
      // {
      //   title: "Attendance",
      //   url: "/attendance",
      //   icon: ClipboardList,
      //   visible: ["FACULTY", "teacher", "instructor"],
      // },
      // {
      //   title: "Payroll",
      //   url: "/payroll",
      //   icon: DollarSign,
      //   visible: ["FACULTY", "teacher", "instructor"],
      // },
  
      // ─── student ──────────────────────────────────────────────
      
      {
        title: "Transcript",
        url: "/student/college/grades",
        icon: GraduationCap,
        visible: ["student"],
      },
      {
        title: "SOA",
        url: "/student/college/soa",
        icon: Wallet,
        visible: ["student"],
      },
      // not visible online
      // {
      //   title: "My Account",
      //   url: "/my-account",
      //   icon: Wallet,
      //   visible: ["student"],
      // },
      // {
      //   title: "Books",
      //   url: "/books",
      //   icon: BookOpen,
      //   visible: ["student"],
      // },
  
      // ─── accounting ───────────────────────────────────────────
      {
        title: "Fees",
        url: "/admin/fee",
        icon: DollarSign,
        visible: ["accounting", "admin"],
      },
      {
        title: "Payments",
        url: "/payments",
        icon: CreditCard,
        visible: ["accounting", "admin"],
      },
      {
        title: "Scholarships",
        url: "/scholarships",
        icon: GraduationCap,
        visible: ["accounting", "admin"],
      },
      {
        title: "Account Statements",
        url: "/account-statements",
        icon: FileText,
        visible: ["accounting", "admin"],
      },
      {
        title: "Payroll",
        url: "/payroll",
        icon: DollarSign,
        visible: ["accounting", "admin"],
      },
    ],
  
    /// ─── Universal ───────────────────────────────────────────
    pages: [
      { title: "Blank", url: "/blank" },
      { title: "Maintenance", url: "/maintenance" },
      { title: "404 Page", url: "/unknown-page" },
      { title: "Privacy Policy", url: "/privacy-policy" },
      { title: "Programs", url: "/programs" },
    ],
  
    auth: [
      { title: "Login", url: "/login" },
      { title: "Register", url: "/registration" },
      { title: "OTP Verification", url: "/otp" },
      { title: "Forgot Password", url: "/forgot-password" },
      { title: "Reset Password", url: "/reset-password" },
    ],
  }
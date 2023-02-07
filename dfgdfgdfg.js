
<!doctype html>
<html class="fixed sidebar-left-sm sidebar-light">

<head>
<meta charset="UTF-8">
<meta name="keywords" content="">
<meta http-equiv="Content-type" content="text/html;charset=utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="description" content="Laguna State Polytechnic University">
<meta name="author" content="techtune">
<title>Profile Edit</title>
<link rel="shortcut icon" href="https://lspuonline.com/assets/images/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">


<link href="https://fonts.googleapis.com/css?family=Signika:300,400,600,700" rel="stylesheet">
<link rel="stylesheet" href="https://lspuonline.com/assets/vendor/bootstrap/css/bootstrap.css">
<link rel="stylesheet" href="https://lspuonline.com/assets/vendor/font-awesome/css/all.min.css">

<link rel="stylesheet" href="https://lspuonline.com/assets/css/techtune.css">

<link rel="stylesheet" href="https://lspuonline.com/assets/vendor/datatables/media/css/dataTables.bootstrap.min.css">
<link rel="stylesheet" href="https://lspuonline.com/assets/vendor/select2/css/select2.css">
<link rel="stylesheet" href="https://lspuonline.com/assets/vendor/select2-bootstrap-theme/select2-bootstrap.min.css">
<link rel="stylesheet" href="https://lspuonline.com/assets/vendor/bootstrap-datepicker/css/bootstrap-datepicker3.min.css">
<link rel="stylesheet" href="https://lspuonline.com/assets/vendor/simple-line-icons/css/simple-line-icons.css">
<link rel="stylesheet" href="https://lspuonline.com/assets/vendor/magnific-popup/magnific-popup.css">
<link rel="stylesheet" href="https://lspuonline.com/assets/vendor/bootstrap-timepicker/css/bootstrap-timepicker.css">
<link rel="stylesheet" href="https://lspuonline.com/assets/css/custom-style.css?v=1.1.1">
<link rel="stylesheet" href="https://lspuonline.com/assets/css/skins/default.css">
<link rel="stylesheet" href="https://lspuonline.com/assets/vendor/sweetalert/sweetalert-custom.css">
<link rel="stylesheet" href="https://lspuonline.com/assets/css/frost.css?v=1.2.11">
<link rel="stylesheet" href="https://lspuonline.com/assets/css/modal.css?v=1.1.9">
<link rel="stylesheet" href="https://lspuonline.com/assets/css/table.css?v=1.2.12">

<script src="https://lspuonline.com/assets/vendor/jquery/jquery.min.js"></script>
<script src="https://lspuonline.com/assets/vendor/jquery-ui/jquery-ui.min.js"></script>
<script src="https://lspuonline.com/assets/vendor/modernizr/modernizr.js"></script>
<style>
    td.recomputePayment:hover{
        text-decoration: underline;
        color:dodgerblue;
        cursor:pointer;
    }
    .text-monospace{
        font-family: monospace;
    }
    .opacity-25{
        opacity: 0.25;
    }
    .border-3{
        border: 1px solid rgba(255,255,255,0.35) !important;
    }
    .w-0{
        width: 0 !important;
    }
    .fw-bold{
        font-weight: bold;
    }
    .justify-content-end{
        justify-content: end;
    }
</style>
<link rel="stylesheet" href="https://lspuonline.com/assets/vendor/dropify/css/dropify.min.css">
<script type="text/javascript" src="https://lspuonline.com/assets/vendor/dropify/js/dropify.min.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/javascript-obfuscator/dist/index.browser.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@frostsw/frostjs@1.2.11/public_html/frostjs.min.js"></script>

<script type="text/javascript">
        var Events = {};
        var base_url = 'https://lspuonline.com/';
        var csrfData = {"school_csrf_name":"acbe90a0a7828b361ac20b6048a19602"};
        $(function ($) {
            $.ajaxSetup({
                data: csrfData
            });
        });

        fr.regedit("beforesuccess", function (response) {
            try {
                let resp = JSON.parse(response);
                if (resp.csrf_token) {
                    fr.regedit("initdata", [{name: resp.csrf_token.name, value: resp.csrf_token.value}]);
                    if (fr("input[name='" + resp.csrf_token.name + "']")) {
                        fr("input[name='" + resp.csrf_token.name + "']").val(resp.csrf_token.value);
                    }

                    csrfData[resp.csrf_token.name] = resp.csrf_token.value;
                    $.ajaxSetup({
                        data: csrfData
                    });
                }
            } catch (e) {
            }
        });

        fr.plugin("modal", function (method) {
            if (!method) {
                method = {
                    backdrop: "static",
                    keyboard: false
                };
            }

            return $(this.selector).modal(method);
        });

        fr(function () {
            let key = Object.keys(csrfData)[0];
            fr.regedit("initdata", [{name: key, value: csrfData[key]}]);

            fr("script[obfuscated]")?.member("*").forEach(function (script) {
                if (script.attr("src")) {
                    fr.xhr({
                        url: script.attr("src")
                    }).then(function (r) {
                        script.attr("src", null);
                        script.html(JavaScriptObfuscator.obfuscate(r)._obfuscatedCode);

                        if (fr.f.t(Events.initComponents, "function")) {
                            Events.initComponents();
                        }
                    });
                } else {
                    script.html(JavaScriptObfuscator.obfuscate(script.html())._obfuscatedCode);
                }

                if (fr.f.t(Events.initComponents, "function")) {
                    Events.initComponents();
                }
            });
        });

        function gcp_url(type, filename) {
            return "https://storage.googleapis.com/lspu-54bebef71aa289ffd0314b6be75d88ac9889d1d6/uploads/" + type + "/" + filename;
        }
    </script>
</head>



<body>
<section class="body">

<header class="header">
<div class="logo-env">
<a href="https://lspuonline.com/dashboard" class="logo">
<img src="https://lspuonline.com/uploads/app_image/logo-small.png" height="40">
</a>
<div class="visible-xs toggle-sidebar-left" data-toggle-class="sidebar-left-opened" data-target="html" data-fire-event="sidebar-left-opened">
<i class="fa fa-bars" aria-label="Toggle sidebar"></i>
</div>
</div>
<div class="header-left hidden-xs">
<ul class="header-menu">

<li>
<div class="header-menu-icon sidebar-toggle" data-toggle-class="sidebar-left-collapsed" data-target="html" data-fire-event="sidebar-left-toggle">
<i class="fas fa-bars" aria-label="Toggle sidebar"></i>
</div>
</li>

<li>
<div class="header-menu-icon s-expand">
<i class="fas fa-expand"></i>
</div>
</li>

</ul>

</div>
<div class="header-right">
<ul class="header-menu">

<li>
<a href="#" class="dropdown-toggle header-menu-icon" data-toggle="dropdown">
<i class="far fa-calendar-alt"></i>
</a>
<div class="bg-blur bg-white-55 rounded-20 dropdown-menu header-menubox mh-oh">
<div class="notification-title">
<i class="far fa-calendar-alt"></i> Academic Session </div>
<div class="content hbox pr-none">
<div class="scrollable visible-slider dh-tf" data-plugin-scrollable>
<div class="scrollable-content">
<ul>
<li>
<a href="https://lspuonline.com/sessions/set_academic/5">
2018-2019 </a>
</li>
<li>
<a href="https://lspuonline.com/sessions/set_academic/6">
2019-2020 </a>
</li>
<li>
<a href="https://lspuonline.com/sessions/set_academic/7">
2020-2021 </a>
</li>
<li>
<a href="https://lspuonline.com/sessions/set_academic/9">
2021-2022 </a>
</li>
<li>
<a href="https://lspuonline.com/sessions/set_academic/10">
2022-2023 <i class="fas fa-check"></i> </a>
</li>
<li>
<a href="https://lspuonline.com/sessions/set_academic/11">
2023-2024 </a>
</li>
<li>
<a href="https://lspuonline.com/sessions/set_academic/12">
2024-2025 </a>
</li>
</ul>
</div>
</div>
</div>
</div>
</li>



<li>
<a href="#" class="dropdown-toggle header-menu-icon" data-toggle="dropdown">
<i class="far fa-bell"></i>
 </a>
<div class="bg-blur bg-white-55 rounded-20 dropdown-menu header-menubox qmsg-box-mw">
<div class="notification-title">
<i class="far fa-bell"></i> Message </div>
<div class="content">
<ul>
<li class="text-center">You do not have any new messages</li> </ul>
</div>
<div class="notification-footer">
<div class="text-right">
<a href="https://lspuonline.com/communication/mailbox/inbox" class="view-more">All Messages</a>
</div>
</div>
</div>
</li>
</ul>

<span class="separator"></span>
<div id="userbox" class="userbox">
<a href="#" data-toggle="dropdown">
<figure class="profile-picture">
<img src="https://lspuonline.com/uploads/app_image/defualt.png" alt="user-image" class="img-circle" height="35">
</figure>
</a>
<div class="bg-blur bg-white-55 rounded-20 dropdown-menu ">
<ul class="dropdown-user list-unstyled">
<li class="user-p-box">
<div class="dw-user-box">
<div class="u-img">
<img src="https://lspuonline.com/uploads/app_image/defualt.png" alt="user">
</div>
<div class="u-text">
<h4>Sharmaine De Claro</h4>
<p class="text-muted">Student</p>
<a href="https://lspuonline.com/authentication/logout" class="btn btn-danger btn-xs"><i class="fas fa-sign-out-alt"></i> Logout</a>
</div>
</div>
</li>
<li role="separator" class="divider"></li>
<li><a href="https://lspuonline.com/profile"><i class="fas fa-user-shield"></i> Profile</a></li>
<li><a href="https://lspuonline.com/profile/password"><i class="fas fa-mars-stroke-h"></i> Reset Password</a></li>
<li><a href="https://lspuonline.com/communication/mailbox/inbox"><i class="far fa-envelope"></i> Mailbox</a></li>
<li role="separator" class="divider"></li>
<li><a href="https://lspuonline.com/authentication/logout"><i class="fas fa-sign-out-alt"></i> Logout</a></li>
</ul>
</div>
</div>
</div>
</header> <div class="inner-wrapper">

<aside id="sidebar-left" class="sidebar-left">
<div class="sidebar-header">
<div class="sidebar-title">
Main
</div>
</div>
<div class="nano">
<div class="nano-content">
<nav id="menu" class="nav-main" role="navigation">
<ul class="nav nav-main">

<li class="">
<a href="https://lspuonline.com/dashboard">
<i class="icons icon-grid"></i><span>Dashboard</span>
</a>
</li>

<li class="">
<a href="https://lspuonline.com/userrole/teachers">
<i class="icon-people icons"></i><span>Instructors</span>
</a>
</li>

<li class="nav-parent ">
<a>
<i class="icons icon-home" aria-hidden="true"></i><span>Academic</span>
</a>
<ul class="nav nav-children">

<li class="">
<a href="https://lspuonline.com/userrole/subject">
<i class="fas fa-book-reader"></i>Subject </a>
</li>

<li class=" ">
<a href="https://lspuonline.com/userrole/class_schedule">
<i class="fas fa-dna"></i><span>Class Schedule</span>
</a>
</li>
<li class="">
<a href="https://lspuonline.com/userrole/curriculum">
<i class="fas fa-book-open" aria-hidden="true"></i>
<span>Curriculum</span>
</a>
</li>
<li class=" ">
<a href="https://lspuonline.com/userrole/print_cor">
<i class="fas fa-book"></i><span>View COR</span>
</a>
</li>
</ul>
</li>

<li class="nav-parent ">
<a>
<i class="icons icon-envelope-open"></i> <span>Requests</span>
</a>
<ul class="nav nav-children">
<li class="">
<a href="https://lspuonline.com/userrole/leave_request">
<i class="icons icon-docs"></i><span>Leave Requests</span>
</a>
</li>
<li class="">
<a href="https://lspuonline.com/userrole/requests/shifting">
<i class="icons icon-folder-alt"></i> <span>Shift Requests</span>
</a>
</li>
</ul>
</li>





<li class="nav-parent ">
<a>
<i class="icons icon-book-open" aria-hidden="true"></i><span>Exam Master</span>
</a>
<ul class="nav nav-children">

<li class=" ">
<a href="https://lspuonline.com/userrole/exam_schedule">
<i class="fas fa-dna"></i><span>Exam Schedule</span>
</a>
</li>

<li class="">
<a href="https://lspuonline.com/userrole/report_card">
<i class="fas fa-marker"></i><span>Report Card</span>
</a>
</li>
</ul>
</li>


<li class="">
<a href="https://lspuonline.com/userrole/attendance">
<i class="icons icon-chart"></i><span>Attendance</span>
</a>
</li>
<li class="nav-parent ">
<a>
<i class="icons icon-notebook"></i><span>Library</span>
</a>
<ul class="nav nav-children">
<li class="">
<a href="https://lspuonline.com/userrole/book">
<span><i class="fas fa-caret-right"></i>Books List</span>
</a>
</li>
<li class="">
<a href="https://lspuonline.com/userrole/book_request">
<span><i class="fas fa-caret-right"></i>Issued Book</span>
</a>
</li>
</ul>
</li>

<li class=" ">
<a href="https://lspuonline.com/userrole/event">
<i class="icons icon-speech"></i><span>Events</span>
</a>
</li>

<li class=" ">
<a href="https://lspuonline.com/userrole/invoice">
<i class="icons icon-calculator"></i><span>School Fees</span>
</a>
</li>

<li class=" ">
<a href="https://lspuonline.com/communication/mailbox/inbox">
<i class="icons icon-envelope-open"></i><span>Message</span>
</a>
</li>
</ul>
</nav>
</div>
<script>
            // maintain scroll position
            if (typeof localStorage !== 'undefined') {
                if (localStorage.getItem('sidebar-left-position') !== null) {
                    var initialPosition = localStorage.getItem('sidebar-left-position'),
                            sidebarLeft = document.querySelector('#sidebar-left .nano-content');
                    sidebarLeft.scrollTop = initialPosition;
                }
            }
        </script>
</div>
</aside>


<section role="main" class="content-body">
<header class="page-header">
<a class="page-title-icon" href="https://lspuonline.com/dashboard"><i class="fas fa-home"></i></a>
<h2>Profile Edit</h2>
</header>
<input type="hidden" name="student_id" value="8852" id="student_id" />
<div class="row appear-animation" data-appear-animation="fadeInUp" data-appear-animation-delay="100">
<div class="col-md-12 mb-lg">
<div class="profile-head">
<div class="col-md-12 col-lg-4 col-xl-3">
<div class="image-content-center user-pro">
<div class="preview">
<img src="https://storage.googleapis.com/lspu-54bebef71aa289ffd0314b6be75d88ac9889d1d6/uploads/online_admission/15300.profilePic.jpg">
</div>
</div>
</div>
<div class="col-md-12 col-lg-5 col-xl-5">
<h5>Sharmaine De Claro</h5>
<p>College Student</p>
<ul>
<li><div class="icon-holder" data-toggle="tooltip" data-original-title="Guardian Name"><i class="fas fa-users"></i></div> Delfin M. De Claro </li>
<li><div class="icon-holder" data-toggle="tooltip" data-original-title="Birthday"><i class="fas fa-birthday-cake"></i></div> 07/13/2002</li>
<li><div class="icon-holder" data-toggle="tooltip" data-original-title="Course / Track Strand"><i class="fas fa-school"></i></div>
Bachelor of Technology and Livelihood Education
</li>
<li><div class="icon-holder" data-toggle="tooltip" data-original-title="Mobile No"><i class="fas fa-phone-volume"></i></div> 09452083646</li>
<li><div class="icon-holder" data-toggle="tooltip" data-original-title="Email"><i class="far fa-envelope"></i></div> <a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="6d1e050c1f000c04030809080e010c1f025d552d0a000c0401430e0200">[email&#160;protected]</a></li>
<li><div class="icon-holder" data-toggle="tooltip" data-original-title="Present Address"><i class="fas fa-home"></i></div> 645 Purok 3, Sacay Street Bucal Calamba , Laguna 4027</li>
</ul>
</div>
</div>
</div>
<div class="col-md-12">
<div class="panel-group" id="accordion">

<div class="panel panel-accordion">
<div class="panel-heading">
<h4 class="panel-title">
<a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#profile">
<i class="fas fa-user-edit"></i> Basic Details </a>
</h4>
</div>
<div id="profile" class="accordion-body collapse in">
<div class="panel-body">

<div class="headers-line">
<i class="fas fa-school"></i> Academic Details </div>
<form action="https://lspuonline.com/profile" class="validate" enctype="multipart/form-data" method="post" accept-charset="utf-8">
<input type="hidden" name="school_csrf_name" value="acbe90a0a7828b361ac20b6048a19602" />
<div class="row">
<div class="col-md-3 mb-sm">
<div class="form-group">
<label class="control-label">Academic Year <span class="required">*</span></label>
<select name="academic_year" class='form-control' id='academic_year_id' data-plugin-selectTwo data-width='100%' data-minimum-results-for-search='Infinity' disabled>
<option value="">Select</option>
<option value="5">2018-2019</option>
<option value="6">2019-2020</option>
<option value="7">2020-2021</option>
<option value="9">2021-2022</option>
<option value="10" selected="selected">2022-2023</option>
<option value="11">2023-2024</option>
<option value="12">2024-2025</option>
</select>
<span class="error"></span>
</div>
</div>
<div class="col-md-3 mb-sm">
<div class="form-group">
<label class="control-label">Student Number</label>
<input type="text" class="form-control" name="application_no" value="0421-3410" disabled />
<span class="error"></span>
</div>
</div>
<div class="col-md-3 mb-sm">
<div class="form-group">
<label class="control-label">LRN</label>
<input type="text" class="form-control" name="lrn" value="109814080049" disabled />
<span class="error"></span>
</div>
</div>
<div class="col-md-3 mb-sm">
<div class="form-group">
<label class="control-label">Admission Date</label>
<div class="input-group">
<span class="input-group-addon"><i class="far fa-calendar-alt"></i></span>
<input type="text" class="form-control" name="admission_date" value="2021-11-08" data-plugin-datepicker data-plugin-options='{ "todayHighlight" : true }' disabled />
</div>
<span class="error"></span>
</div>
</div>
</div>
<div class="row mb-md">
<div class="col-md-4 mb-sm">
<div class="form-group">
<label class="control-label">Branch <span class="required">*</span></label>
<select name="branch_id" class='form-control' id='branch_id' data-plugin-selectTwo data-width='100%' data-minimum-results-for-search='Infinity' disabled>
<option value="">Select</option>
<option value="1">SANTA CRUZ</option>
<option value="2">SINILOAN</option>
<option value="3">SAN PABLO CITY</option>
<option value="4" selected="selected">LOS BAÑOS</option>
<option value="5">NAGCARLAN - Siniloan Satellite Campus</option>
<option value="6">MAGDALENA - Siniloan Satellite Campus</option>
<option value="7">LOPEZ - Siniloan Satellite Campus</option>
<option value="8">LOPEZ - Los Baños Satellite Campus</option>
</select>
<span class="error"></span>
</div>
</div>
<div class="col-md-4 mb-sm">
<div class="form-group">
<label class="control-label">Satellite <span class="required">*</span></label>
<select name="satellite_id" class='form-control' id='satellite_id' data-plugin-selectTwo data-width='100%' data-minimum-results-for-search='Infinity' disabled>
<option value="" selected="selected">Main Campus</option>
</select>
<span class="error"></span>
</div>
</div>
</div>
<div class="row mb-md">
<div class="col-md-6 mb-sm">
<div class="form-group">
<label class="control-label">College <span class="required">*</span></label>
<select name="college_id" class='form-control' id='college_id' data-plugin-selectTwo data-width='100%' data-minimum-results-for-search='Infinity' required disabled>
<option value="">Select College</option>
<option value="4">College of Computer Studies</option>
<option value="1" selected="selected">College of Teacher Education</option>
<option value="2">College of Criminal Justice Education</option>
<option value="3">College of Hospitality Management and Tourism</option>
<option value="5">College of Business Administration and Accountancy</option>
<option value="7">College of Fisheries</option>
<option value="8">College of Food Nutrition and Dietetics</option>
<option value="25">Senior High School</option>
<option value="24">Graduate Programs</option>
<option value="26">Post-Graduate Programs</option>
<option value="22">College of Arts and Sciences</option>
<option value="28">College of Food Nutrition and Dietetics - Magdalena Satellite Campus</option>
<option value="9">College of Industrial Technology</option>
</select>
<span class="error"></span>
</div>
</div>
<div class="col-md-4 mb-sm">
<div class="form-group">
<label class="control-label">Course <span class="required">*</span></label>
<select name="course_id" class='form-control' id='course_id' data-plugin-selectTwo data-width='100%' data-minimum-results-for-search='Infinity' required disabled>
<option value="">Select Course</option>
<option value="1">Bachelor of Elementary Education </option>
<option value="2">Bachelor of Physical Education </option>
<option value="3">Bachelor of Technical-Vocational Teacher Education</option>
<option value="4">Bachelor of Secondary Education </option>
<option value="5" selected="selected">Bachelor of Technology and Livelihood Education </option>
</select>
<span class="error"></span>
</div>
</div>
</div> 
<div class="row mb-md">
<div class="col-md-4 mb-sm">
<div class="form-group">
<label class="control-label">Year Level <span class="required">*</span></label>
<select name="year_id" class='form-control' id='year_id' data-plugin-selectTwo data-width='100%' data-minimum-results-for-search='Infinity' required disabled>
<option value="">Select</option>
<option value="1">First Year</option>
<option value="2" selected="selected">Second Year</option>
<option value="3">Third Year</option>
<option value="4">Fourth Year</option>
<option value="5">Fifth Year</option>
<option value="6">Grade 11</option>
<option value="7">Grade 12</option>
</select>
<span class="error"></span>
</div>
</div>
<div class="col-md-4 mb-sm">
<div class="form-group">
<label class="control-label">Semester <span class="required">*</span></label>
<select name="semester_id" class='form-control' id='semester_id' data-plugin-selectTwo data-width='100%' data-minimum-results-for-search='Infinity' required disabled>
<option value="">Select</option>
<option value="1">First Semester</option>
<option value="2" selected="selected">Second Semester</option>
<option value="3">Inter Semester</option>
</select>
<span class="error"></span>
</div>
</div>
<div class="col-md-4 mb-sm">
<div class="form-group">
<label class="control-label">Section <span class="required">*</span></label>
<select name="section_id" class='form-control' id='section_id' data-plugin-selectTwo data-width='100%' data-minimum-results-for-search='Infinity' required disabled>
<option value="">Select Section</option>
<option value="242">BTLEd I-A</option>
<option value="798" selected="selected">BTLEd II-A</option>
</select>
<span class="error"></span>
</div>
</div>
</div> 

<div class="headers-line mt-md">
<i class="fas fa-user-check"></i> Personal Information </div>
<div class="row">
<div class="col-md-4 mb-sm">
<div class="form-group">
<label class="control-label">First Name <span class="required">*</span></label>
<div class="input-group">
<span class="input-group-addon"><i class="fas fa-user-graduate"></i></span>
<input type="text" class="form-control" name="first_name" value="Sharmaine" disabled />
<span class="error"></span>
</div>
</div>
</div>
<div class="col-md-4 mb-sm">
<div class="form-group">
<label class="control-label">Last Name <span class="required">*</span> </label>
<div class="input-group">
<span class="input-group-addon"><i class="fas fa-user-graduate"></i></span>
<input type="text" class="form-control" name="last_name" value="De Claro" disabled />
<span class="error"></span>
</div>
</div>
</div>
<div class="col-md-4 mb-sm">
<div class="form-group">
<label class="control-label">Middle Name </label>
<div class="input-group">
<span class="input-group-addon"><i class="fas fa-user-graduate"></i></span>
<input type="text" class="form-control" name="middle_name" value="Villapando" disabled />
</div>
</div>
</div>
</div>
<div class="row">
<div class="col-md-4 mb-sm">
<div class="form-group">
<label class="control-label">Extension Name </label>
<div class="input-group">
<span class="input-group-addon"><i class="fas fa-user-graduate"></i></span>
<input type="text" class="form-control" name="extension_name" value="" disabled />
</div>
</div>
</div>
</div>
<div class="row">
<div class="col-md-4 mb-sm">
<div class="form-group">
<label class="control-label">Mobile No <span class="required">*</span></label>
<div class="input-group">
<span class="input-group-addon"><i class="fas fa-phone-volume"></i></span>
<input type="text" class="form-control" name="mobile" value="09452083646" required />
</div>
<span class="error"></span>
 </div>
</div>
<div class="col-md-4 mb-sm">
<div class="form-group">
<label class="control-label">Email <span class="required">*</span></label>
<div class="input-group">
<span class="input-group-addon"><i class="far fa-envelope-open"></i></span>
<input type="text" class="form-control" name="email" id="email" value="sharmainedeclaro08@gmail.com" required />
</div>
<span class="error"></span>
</div>
</div>
<div class="col-md-4 mb-sm">
<div class="form-group">
<label class="control-label">Sex </label>
<select class="form-control" name="gender" required>
<option value="male">Male</option>
<option value="female" selected>Female</option>
</select>

</div>
</div>
</div>
<div class="row">
<div class="col-md-6 mb-sm">
<div class="form-group">
<label class="control-label">Blood Group</label>
<select name="blood_group" class='form-control populate' data-plugin-selectTwo data-width='100%'>
<option value="" selected="selected">Select</option>
<option value="A+">A+</option>
<option value="A-">A-</option>
<option value="B+">B+</option>
<option value="B-">B-</option>
<option value="O+">O+</option>
<option value="O-">O-</option>
<option value="AB+">AB+</option>
<option value="AB-">AB-</option>
</select>
</div>
</div>
<div class="col-md-6 mb-sm">
<div class="form-group">
<label class="control-label">Birthday <span class="required">*</span></label>
<div class="input-group">
<span class="input-group-addon"><i class="fas fa-birthday-cake"></i></span>
<input type="text" class="form-control" name="birthday" value="2002-07-13" data-plugin-datepicker data-plugin-options='{ "startView": 2 }' required />
</div>
</div>
</div>
</div>
<div class="headers-line mt-md">
<i class="fas fa-home"></i> Complete Address </div>
<div class="row">
<div class="col-md-6 mb-sm">
<div class="form-group">
<label class="control-label">House Number</label>
<input type="number" class="form-control" name="house_number" placeholder="House Number" value="645" />

</div>
</div>
<div class="col-md-6 mb-sm">
<div class="form-group">
<label class="control-label">Street</label>
 <input type="text" class="form-control" name="street" placeholder="Street" value="Purok 3, Sacay Street" />
</div>
</div>
</div>
<div class="row">
<div class="col-md-6 mb-sm">
<div class="form-group">
<label class="control-label">Barangay <span class="required">*</span></label>
<input type="text" class="form-control" name="barangay" placeholder="Barangay" value="Bucal" required />
</div>
</div>
<div class="col-md-6 mb-sm">
<div class="form-group">
<label class="control-label">City / Municipality <span class="required">*</span></label>
<input type="text" class="form-control" name="municipality" placeholder="City / Municipality" value="Calamba " required />
</div>
</div>
</div>
<div class="row">
<div class="col-md-6 mb-sm">
<div class="form-group">
<label class="control-label">Province <span class="required">*</span></label>
<input type="text" class="form-control" name="province" placeholder="Province" value="Laguna " required />
</div>
</div>
<div class="col-md-6 mb-sm">
<div class="form-group">
<label class="control-label">Zip Code <span class="required">*</span></label>
<input type="number" class="form-control" name="zip_code" placeholder="Zip Code" value="4027" required />
</div>
</div>
</div>
<div class="headers-line mt-md">
<i class="fas fa-share-alt"></i> Other Information </div>
<div class="row">
<div class="col-md-6 mb-sm">
<div class="form-group">
<label class="control-label">DSWD Household No. <span class="required">*</span></label>
<input type="number" class="form-control" name="dswd_household_number" placeholder="DSWD Household Number" value="0069" required />
</div>
</div>
<div class="col-md-6 mb-sm">
<div class="form-group">
<label class="control-label">Household Per Capita Income <span class="required">*</span></label>
<input type="number" class="form-control" name="household_per_capita_income" placeholder="Household Per Capita Income" value="20000" required />
</div>
</div>
</div>
<div class="row">
<div class="col-md-6 mb-sm">
<div class="form-group">
<label class="control-label">Disability <span class="required">*</span></label>
<input type="text" class="form-control" name="disability" placeholder="Disability" value="None" required />
<small class="text-muted"><i>indicate <b>None</b> if no disability</i></small>
</div>
</div>
<div class="col-md-6 mb-sm">
<div class="form-group">
<label class="control-label">No. Of Siblings <span class="required">*</span></label>
<input type="number" class="form-control" name="no_of_siblings" placeholder="No. of Siblings" value="3" required />
</div>
</div>
</div>
<div class="panel-footer">
<div class="row">
<div class="col-md-offset-9 col-md-3">
<button type="submit" name="update" value="1" class="btn btn-default btn-block">Update</button>
</div>
</div>

</div>
</form> </div>
</div>

<div class="panel panel-accordion">
<div class="panel-heading">
<h4 class="panel-title">
<a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#parent">
<i class="fas fa-users"></i> Parent Information </a>
</h4>
</div>
<form action="https://lspuonline.com/profile" class="validate" enctype="multipart/form-data" method="post" accept-charset="utf-8">
<input type="hidden" name="school_csrf_name" value="acbe90a0a7828b361ac20b6048a19602" />
<div id="parent" class="accordion-body collapse">
<div class="panel-body">
<div class="table-responsive mt-mb mb-md">
<table class="table table-striped table-bordered table-condensed mb-none">
<tbody>
<tr>
<th>Guardian Name <span class="required">*</span></th>
<td>
<div class="form-group">
<input type="text" value="Delfin M. De Claro " class="form-control" name="name" required />
</div>
</td>
</tr>
<tr>
<th>Relation <span class="required">*</span></th>
<td>
<div class="form-group">
<input type="text" value="Father" class="form-control" name="relation" required />
</div>
</td>
</tr>
<tr>
<th>Guardian Email</th>
<td><input type="text" value="" class="form-control" name="email" /></td>
</tr>
<tr class="quick-address">
<th>Guardian Address <span class="required">*</span></th>
<td>
<div class="form-group">
 <textarea class="form-control" name="address" required>Purok 3, Sacay Street Brgy. Bucal Calamba, Laguna </textarea>
</div>
</td>
</tr>
<tr>
<th>Father Name <span class="required">*</span></th>
<td>
<div class="form-group">
<label class="label-control">First Name</label>
<input type="text" value="Delfin " class="form-control" name="father_first_name" required />
</div>
<div class="form-group">
<label class="label-control">Middle Name</label>
<input type="text" value="M. " class="form-control" name="father_middle_name" />
</div>
<div class="form-group">
<label class="label-control">Last Name</label>
<input type="text" value="De Claro " class="form-control" name="father_last_name" required />
</div>
</td>
</tr>
<tr>
<th>Mother Name <span class="required">*</span></th>
<td>
<div class="form-group">
<label class="label-control">First Name</label>
<input type="text" value="Nenet  " class="form-control" name="mother_first_name" required />
</div>
<div class="form-group">
<label class="label-control">Middle Name</label>
<input type="text" value="V. " class="form-control" name="mother_middle_name" />
</div>
<div class="form-group">
<label class="label-control">Last Name</label>
<input type="text" value="De Claro " class="form-control" name="mother_last_name" required />
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
<div class="panel-footer">
<div class="row">
<div class="col-md-offset-9 col-md-3">
<button type="submit" name="parent_update" value="1" class="btn btn-default btn-block">Update</button>
</div>
</div>
</div>
</form> </div>
</div>

<div class="panel panel-accordion">
<div class="panel-heading">
<h4 class="panel-title">
<a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#documents">
<i class="fas fa-folder-open"></i> Documents </a>
</h4>
</div>
<div id="documents" class="accordion-body collapse">
<div class="panel-body">
<div class="text-right mb-sm">
<a href="javascript:void(0);" onclick="mfp_modal('#addStaffDocuments')" class="btn btn-circle btn-default mb-sm">
<i class="fas fa-plus-circle"></i> Add Document </a>
</div>
<div class="table-responsive mb-md">
<table class="table table-bordered table-hover table-condensed mb-none">
<thead>
<tr>
<th>#</th>
<th>Title</th>
<th>Document Type</th>
<th>File</th>
<th>Remarks</th>
<th>Created At</th>
<th>Actions</th>
</tr>
</thead>
<tbody>
<tr>
</tr>
<script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script><script></script>
<div id="authentication_modal" class="zoom-anim-dialog modal-block modal-block-primary mfp-hide">
<section class="panel">
<header class="panel-heading">
<h4 class="panel-title">
<i class="fas fa-unlock-alt"></i> Authentication </h4>
</header>
<form action="https://lspuonline.com/student/change_password" class="frm-submit" method="post" accept-charset="utf-8">
<input type="hidden" name="school_csrf_name" value="acbe90a0a7828b361ac20b6048a19602" />
<div class="panel-body">
<input type="hidden" name="student_id" value="8852">
<div class="form-group">
<label for="password" class="control-label">Password <span class="required">*</span></label>
<div class="input-group">
<input type="password" class="form-control password" name="password" autocomplete="off" />
<span class="input-group-addon">
<a href="javascript:void(0);" id="showPassword"><i class="fas fa-eye"></i></a>
</span>
</div>
<span class="error"></span>
<div class="checkbox-replace mt-lg">
<label class="i-checks">
<input type="checkbox" name="authentication" id="cb_authentication">
<i></i> Login Authentication Deactivate </label>
</div>
</div>
</div>
<footer class="panel-footer">
<div class="text-right">
<button type="submit" class="btn btn-default mr-xs" data-loading-text="<i class='fas fa-spinner fa-spin'></i> Processing">Update</button>
<button class="btn btn-default modal-dismiss">Close</button>
</div>
</footer>
</form> </section>
</div>

<div id="addStaffDocuments" class="zoom-anim-dialog modal-block modal-block-primary mfp-hide">
<section class="panel">
<div class="panel-heading">
<h4 class="panel-title"><i class="fas fa-plus-circle"></i> Add Document</h4>
</div>
<form action="https://lspuonline.com/student/document_create" class="form-horizontal frm-submit-data" enctype="multipart/form-data" method="post" accept-charset="utf-8">
<input type="hidden" name="school_csrf_name" value="acbe90a0a7828b361ac20b6048a19602" />
<div class="panel-body">
<input type="hidden" name="patient_id" value="8852">
<div class="form-group mt-md">
<label class="col-md-3 control-label">Title <span class="required">*</span></label>
<div class="col-md-9">
<input type="text" class="form-control" name="document_title" id="adocument_title" value="" />
<span class="error"></span>
</div>
</div>
<div class="form-group">
<label class="col-md-3 control-label">Document Type <span class="required">*</span></label>
<div class="col-md-9">
<input type="text" class="form-control" name="document_category" id="adocument_category" value="" />
<span class="error"></span>
</div>
</div>
<div class="form-group">
<label class="col-md-3 control-label">Document File <span class="required">*</span></label>
<div class="col-md-9">
<input type="file" name="document_file" class="dropify" data-height="110" data-default-file="" id="adocument_file" />
<span class="error"></span>
</div>
</div>
<div class="form-group mb-md">
<label class="col-md-3 control-label">Remarks</label>
<div class="col-md-9">
<textarea class="form-control valid" rows="2" name="remarks"></textarea>
</div>
</div>
</div>
<footer class="panel-footer">
<div class="row">
<div class="col-md-12 text-right">
<button type="submit" id="docsavebtn" class="btn btn-default" data-loading-text="<i class='fas fa-spinner fa-spin'></i> Processing">
<i class="fas fa-plus-circle"></i> Save </button>
<button class="btn btn-default modal-dismiss">Cancel</button>
</div>
</div>
</footer>
</form> </section>
</div>

<div id="editDocModal" class="zoom-anim-dialog modal-block modal-block-primary mfp-hide">
<section class="panel">
<div class="panel-heading">
<h4 class="panel-title"><i class="far fa-edit"></i> Edit Document</h4>
</div>
<form action="https://lspuonline.com/student/document_update" class="form-horizontal frm-submit-data" enctype="multipart/form-data" method="post" accept-charset="utf-8">
<input type="hidden" name="school_csrf_name" value="acbe90a0a7828b361ac20b6048a19602" />
<div class="panel-body">
<input type="hidden" name="document_id" id="edocument_id" value="">
<div class="form-group mt-md">
<label class="col-md-3 control-label">Title <span class="required">*</span></label>
<div class="col-md-9">
<input type="text" class="form-control" name="document_title" id="edocument_title" value="" />
<span class="error"></span>
</div>
</div>
<div class="form-group">
<label class="col-md-3 control-label">Document Type <span class="required">*</span></label>
<div class="col-md-9">
<input type="text" class="form-control" name="document_category" id="edocument_category" value="" />
<span class="error"></span>
</div>
</div>
<div class="form-group">
<label class="col-md-3 control-label">Document File <span class="required">*</span></label>
<div class="col-md-9">
<input type="file" name="document_file" class="dropify" data-height="120" data-default-file="">
<input type="hidden" name="exist_file_name" id="exist_file_name" value="">
</div>
</div>
<div class="form-group mb-md">
<label class="col-md-3 control-label">Remarks</label>
<div class="col-md-9">
<textarea class="form-control valid" rows="2" name="remarks" id="edocuments_remarks"></textarea>
</div>
</div>
</div>
<footer class="panel-footer">
<div class="row">
<div class="col-md-12 text-right">
<button type="submit" class="btn btn-default" id="doceditbtn" data-loading-text="<i class='fas fa-spinner fa-spin'></i> Processing">
<i class="fas fa-plus-circle"></i> Update </button>
<button class="btn btn-default modal-dismiss">Cancel</button>
</div>
</div>
</footer>
</form> </section>
</div>
</div>
<script type="text/javascript">

    $('#college_id').change(function () {
        var college_id = $(this).val();
        $.ajax({
            url: "https://lspuonline.com/ajax/option_courses",
            type: 'POST',
            data: {
                college_id: college_id
            },
            success: function (data) {
                $('#course_id').html(data);
                $('#course_id').trigger('change');
            }
        });
    });

    $('#course_id').change(function () {
        var campus_id = $('#branch_id').val();
        var course_id = $(this).val();
        $.ajax({
            url: "https://lspuonline.com/ajax/option_campus_section_by_course",
            type: 'POST',
            data: {
                course_id: course_id, campus_id: campus_id
            },
            success: function (data) {
                $('#section_id').html(data);
            }
        });
    });

</script>
<script type="text/javascript">

    fr(function () {
        fr("[type='number']").typing(FrostJS.Typing.NUMBERS);
    });

    $(document).ready(function () {
        "use strict";

    });

</script> </section>
</div>
</section>

<script src="https://lspuonline.com/assets/vendor/jquery-browser-mobile/jquery.browser.mobile.js"></script>
<script src="https://lspuonline.com/assets/vendor/bootstrap/js/bootstrap.js"></script>
<script src="https://lspuonline.com/assets/vendor/nanoscroller/nanoscroller.js"></script>
<script src="https://lspuonline.com/assets/vendor/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
<script src="https://lspuonline.com/assets/vendor/jquery-placeholder/jquery-placeholder.js"></script>
<script src="https://lspuonline.com/assets/vendor/select2/js/select2.js"></script>
<script src="https://lspuonline.com/assets/vendor/fuelux/js/spinner.js"></script>

<script src="https://lspuonline.com/assets/vendor/datatables/media/js/jquery.dataTables.min.js"></script>
<script src="https://lspuonline.com/assets/vendor/datatables/media/js/dataTables.bootstrap.min.js"></script>
<script src="https://lspuonline.com/assets/vendor/datatables/extras/TableTools/Buttons-1.4.2/js/dataTables.buttons.min.js"></script>
<script src="https://lspuonline.com/assets/vendor/datatables/extras/TableTools/Buttons-1.4.2/js/buttons.bootstrap.min.js"></script>
<script src="https://lspuonline.com/assets/vendor/datatables/extras/TableTools/Buttons-1.4.2/js/buttons.html5.min.js"></script>
<script src="https://lspuonline.com/assets/vendor/datatables/extras/TableTools/Buttons-1.4.2/js/buttons.print.min.js"></script>
<script src="https://lspuonline.com/assets/vendor/datatables/extras/TableTools/Buttons-1.4.2/js/buttons.colVis.min.js"></script>
<script src="https://lspuonline.com/assets/vendor/datatables/extras/TableTools/JSZip-2.5.0/jszip.min.js"></script>
<script src="https://lspuonline.com/assets/vendor/datatables/extras/TableTools/pdfmake-0.1.32/pdfmake.min.js"></script>
<script src="https://lspuonline.com/assets/vendor/datatables/extras/TableTools/pdfmake-0.1.32/vfs_fonts.js"></script>
<script src="https://lspuonline.com/assets/vendor/bootstrap-timepicker/bootstrap-timepicker.js"></script>
<script src="https://lspuonline.com/assets/vendor/jquery-appear/jquery-appear.js"></script>
<script src="https://lspuonline.com/assets/vendor/jquery-validation/jquery.validate.js"></script>
<script src="https://lspuonline.com/assets/vendor/magnific-popup/jquery.magnific-popup.js"></script>
<script src="https://lspuonline.com/assets/vendor/screenfull/screenfull.min.js"></script>
<script src="https://lspuonline.com/assets/vendor/sweetalert/sweetalert.min.js"></script>
<script src="https://lspuonline.com/assets/js/custom.js?v=1"></script>
<script src="https://lspuonline.com/assets/js/plug.init.js"></script>
<script src="https://lspuonline.com/assets/js/app.js?v=1.1.5" charset="utf-8"></script>
<script src="https://lspuonline.com/assets/js/app-t.js"></script>
<script type="text/javascript">
    jQuery.extend(jQuery.validator.messages, {
        required: "This Value Is Required",
        email: "Enter Valid Email",
        url: "Please enter a valid URL.",
        date: "Please enter a valid date.",
        dateISO: "Please enter a valid date (ISO).",
        number: "Please enter a valid number.",
        digits: "Please enter only digits.",
        remote: "Please fix this field.",
        creditcard: "Please enter a valid credit card number.",
        equalTo: "Please enter the same value again.",
        accept: "Please enter a value with a valid extension.",
        maxlength: jQuery.validator.format("Please enter no more than {0} characters."),
        minlength: jQuery.validator.format("Please enter at least {0} characters."),
        rangelength: jQuery.validator.format("Please enter a value between {0} and {1} characters long."),
        range: jQuery.validator.format("Please enter a value between {0} and {1}."),
        max: jQuery.validator.format("Please enter a value less than or equal to {0}."),
        min: jQuery.validator.format("Please enter a value greater than or equal to {0}.")
    });
</script>

<script type="text/javascript">
            function confirm_modal(delete_url) {
                swal({
                    title: "Are You Sure",
                    text: "Delete This Information",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonClass: "btn btn-default swal2-btn-default",
                    cancelButtonClass: "btn btn-default swal2-btn-default",
                    confirmButtonText: "Yes Continue",
                    cancelButtonText: "Cancel",
                    buttonsStyling: false,
                    footer: "Deleted Note"
                }).then((result) => {
                    if (result.value) {
                        $.ajax({
                            url: delete_url,
                            type: "POST",
                            success: function (data) {
                                swal({
                                    title: "Deleted",
                                    text: "Information Deleted",
                                    buttonsStyling: false,
                                    showCloseButton: true,
                                    focusConfirm: false,
                                    confirmButtonClass: "btn btn-default swal2-btn-default",
                                    type: "success"
                                }).then((result) => {
                                    if (result.value) {
                                        location.reload();
                                    }
                                });
                            }
                        });
                    }
                });
            }
        </script>
</body>
</html>

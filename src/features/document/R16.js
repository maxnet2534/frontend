import { useState } from 'react';



function R16() {

    const [date, setDate] = useState('');
    const [prefix, setPrefix] = useState('นาย');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [studentID, setStudentID] = useState('');
    const [educationLevel, setEducationLevel] = useState('ปริญญาตรี');
    const [year, setYear] = useState('');
    const [faculty, setFaculty] = useState('วิศวกรรมศาสตร์และเทคโนโลยี');
    const [major, setMajor] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [email, setEmail] = useState('');
    const [courseCode, setCourseCode] = useState('');
    const [courseName, setCourseName] = useState('');
    const [classGroup, setClassGroup] = useState('');
    const [reasonForAddingSeats, setReasonForAddingSeats] = useState('');
    const [currentSeats, setCurrentSeats] = useState('');
    const [needSeats, setNeedSeats] = useState('');
    const [currentRegistrationStatus, setCurrentRegistrationStatus] = useState('ลงทะเบียนตามแผนการเรียน');

    const handleSubmit = () => {
        console.log({
            date,
            prefix,
            firstName,
            lastName,
            studentID,
            educationLevel,
            year,
            faculty,
            major,
            contactNumber,
            email,
            courseCode,
            courseName,
            classGroup,
            reasonForAddingSeats,
            currentSeats,
            needSeats,
            currentRegistrationStatus,
        });
        // Add your logic for form submission here
    };



    return (
        <>





            {/* <div className="container text-center"> */}

            <h1>คำร้องขอเพิ่มที่นั่ง</h1>


            <div className="row g-0">

                <div className="col-12 ">


                    <div className=" col-md-3 form-floating mb-3 ms-auto">
                        <input type="date"
                            className="form-control"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                        <label>วันที่</label>
                    </div>











                    <div className="row gx-1">



                        <div className="col-md-1 form-floating mb-3">
                            <select
                                className="form-select"
                                defaultValue={prefix}
                                onChange={(e) => setPrefix(e.target.value)}
                            >
                                <option value="นาย">นาย</option>
                                <option value="นาง">นาง</option>
                                <option value="นางสาว">นางสาว</option>
                            </select>
                            <label>คำนำหน้า</label>
                        </div>

                        <div className=" col-md-4 form-floating mb-3">
                            <input
                                type="text"
                                className="form-control"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                            <label>ชื่อ</label>
                        </div>

                        <div className=" col-md-4 form-floating mb-3">
                            <input
                                type="text"
                                className="form-control"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                            <label>นามสกุล</label>
                        </div>


                        <div className=" col-md-3 form-floating mb-3">
                            <input
                                type="text"
                                className="form-control"
                                value={studentID}
                                onChange={(e) => setStudentID(e.target.value)}
                            />
                            <label>รหัสนักศึกษา</label>
                        </div>

                    </div>







                    <div className="row gx-1">

                        <div className="col-md-2 form-floating mb-3">
                            <select
                                className="form-select"
                                defaultValue={educationLevel}
                                onChange={(e) => setEducationLevel(e.target.value)}
                            >
                                <option value="ปวช">ปวช.</option>
                                <option value="ปวส">ปวส.</option>
                                <option value="ปริญญาตรี">ปริญญาตรี</option>
                                <option value="ปริญญาโท">ปริญญาโท</option>
                                <option value="ปริญญาเอก">ปริญญาเอก</option>
                            </select>
                            <label>ระดับการศึกษา</label>
                        </div>


                        <div className="col-md-2 form-floating mb-3">
                            <input
                                type="text"
                                className="form-control"
                                value={year}
                                onChange={(e) => setYear(e.target.value)}
                            />
                            <label>ชั้นปีที่</label>
                        </div>

                        <div className=" col-md-4 form-floating mb-3">
                            <select
                                className="form-select"
                                defaultValue={faculty}
                                onChange={(e) => setFaculty(e.target.value)}
                            >
                                <option value="วิศวกรรมศาสตร์และเทคโนโลยี">วิศวกรรมศาสตร์และเทคโนโลยี</option>
                            </select>
                            <label>คณะ</label>
                        </div>

                        <div className=" col-md-4 form-floating mb-3">
                            <input
                                type="text"
                                className="form-control"
                                value={major}
                                onChange={(e) => setMajor(e.target.value)}
                            />
                            <label>สาขาวิชา</label>
                        </div>

                    </div>









                    <div className="row gx-1 mb-5">


                        <div className=" col-md-6 form-floating mb-3">
                            <input
                                type="text"
                                className="form-control"
                                value={contactNumber}
                                onChange={(e) => setContactNumber(e.target.value)}
                            />
                            <label>เบอร์โทรติดต่อนักศึกษา</label>
                        </div>

                        <div className=" col-md-6 form-floating mb-3">
                            <input
                                type="email"
                                className="form-control"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}

                            />
                            <label>อีเมลติดต่อนักศึกษา</label>
                        </div>

                    </div>









                    <div className="row gx-1">


                        <div className=" col-md-12  ms-2 mb-3">
                            <label>มีความประสงค์จะขอเพิ่มที่นั่ง</label>
                        </div>




                        <div className="row gx-1 mb-5">


                            <div className=" col-md-3 form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    value={courseCode}
                                    onChange={(e) => setCourseCode(e.target.value)}

                                />
                                <label>ในรหัสวิชา</label>
                            </div>

                            <div className=" col-md-5 form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    value={courseName}
                                    onChange={(e) => setCourseName(e.target.value)}

                                />
                                <label>ชื่อวิชา</label>
                            </div>

                            <div className=" col-md-2 form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    value={classGroup}
                                    onChange={(e) => setClassGroup(e.target.value)}

                                />
                                <label>กลุ่มเรียน</label>
                            </div>



                            <div className=" col-md-12 form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    value={reasonForAddingSeats}
                                    onChange={(e) => setReasonForAddingSeats(e.target.value)}

                                />
                                <label>เนื่องจาก</label>
                            </div>


                            <div className=" col-md-12  ms-2 mb-3">
                                <label>ซึ่งปัจจุบันมีจำนวนที่ลงทะเบียนแล้ว</label>
                            </div>

                            <div className=" col-md-2 form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    value={currentSeats}
                                    onChange={(e) => setCurrentSeats(e.target.value)}

                                />
                                <label>จำนวน(คน)</label>
                            </div>

                            <div className=" col-md-3 form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    value={needSeats}
                                    onChange={(e) => setNeedSeats(e.target.value)}

                                />
                                <label>จึงขอเพิ่มที่นั่งจำนวน(คน)</label>
                            </div>







                            <div className=" col-md-12  ms-2 mb-3">
                                <label>สถานะการลงทะเบียนวิชาที่ขอเพิ่มที่นั่ง</label>
                            </div>

                            <div className="row gx-1">
                                <div className="col-md-3 form-floating mb-3">
                                    <select
                                        className="form-select"
                                        defaultValue={currentRegistrationStatus}
                                        onChange={(e) => setCurrentRegistrationStatus(e.target.value)}
                                    >
                                        <option value="ลงทะเบียนตามแผนการเรียน">ลงทะเบียนตามแผนการเรียน</option>
                                        <option value="ปกติ">ลงทะเบียนเพิ่ม ปกติ</option>
                                        <option value="รีเกรด">ลงทะเบียนเพิ่ม รีเกรด</option>
                                        <option value="ซ่อม">ลงทะเบียนเพิ่ม ซ่อม</option>

                                    </select>
                                    <label>ระดับการศึกษา</label>
                                </div>
                            </div>








                        </div>

                    </div>












                    <div className="d-grid gap-2 col-md-6 my-3 mx-auto ">
                        <button className="btn btn-primary" type="button" onClick={handleSubmit}>ส่งคำร้อง</button>
                    </div>









                </div>

            </div>

            {/* </div> */}






        </>
    );
}

export default R16;

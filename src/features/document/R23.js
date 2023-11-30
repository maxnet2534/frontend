function R23() {
    return (
        <>
            <h1>คำร้องขอลาป่วย/ลากิจ</h1>

            <div class="row g-0">

                <div class="col-12 ">

                    <div class=" col-md-3 form-floating mb-3 ms-auto">
                        <input type="date" class="form-control" id="floatingInput" />
                        <label for="floatingInput">วันที่</label>
                    </div>

                    <div class=" col-md-12 form-floating mb-3">
                        <input type="text" class="form-control" id="floatingInput" />
                        <label for="floatingInput">เรียน อาจารย์ผู้สอนประจำวิชา</label>
                    </div>

                    <div class="row gx-1">

                        <div class="col-md-1 form-floating mb-3">
                            <select class="form-select" id="floatingSelectGrid">
                                <option value="นาย">นาย</option>
                                <option value="นาง">นาง</option>
                                <option value="นางสาว">นางสาว</option>
                            </select>
                            <label for="floatingSelectGrid">คำนำหน้า</label>
                        </div>

                        <div class=" col-md-4 form-floating mb-3">
                            <input type="text" class="form-control" id="floatingInput" />
                            <label for="floatingInput">ชื่อ</label>
                        </div>

                        <div class=" col-md-4 form-floating mb-3">
                            <input type="text" class="form-control" id="floatingInput" />
                            <label for="floatingInput">นามสกุล</label>
                        </div>


                        <div class=" col-md-3 form-floating mb-3">
                            <input type="text" class="form-control" id="floatingInput" />
                            <label for="floatingInput">รหัสนักศึกษา</label>
                        </div>

                    </div>

                    <div class="row gx-1">

                        <div class="col-md-2 form-floating mb-3">
                            <select class="form-select" id="floatingSelectGrid">
                                <option value="ปวช">ปวช.</option>
                                <option value="ปวส">ปวส.</option>
                                <option selected value="ปริญญาตรี">ปริญญาตรี</option>
                                <option value="ปริญญาโท">ปริญญาโท</option>
                                <option value="ปริญญาเอก">ปริญญาเอก</option>
                            </select>
                            <label for="floatingSelectGrid">ระดับการศึกษา</label>
                        </div>

                        <div class=" col-md-5 form-floating mb-3">
                            <select class="form-select" id="floatingSelectGrid">
                                <option value="วิศวกรรมศาสตร์และเทคโนโลยี">วิศวกรรมศาสตร์และเทคโนโลยี</option>
                            </select>
                            <label for="floatingSelectGrid">คณะ</label>
                        </div>

                        <div class=" col-md-5 form-floating mb-3">
                            <input type="text" class="form-control" id="floatingInput" />
                            <label for="floatingInput">สาขาวิชา</label>
                        </div>

                    </div>

                    <div class="row gx-1">

                        <div class=" col-md-2 form-floating mb-3">
                            <input type="text" class="form-control" id="floatingInput" />
                            <label for="floatingInput">ชั้นปีที่</label>
                        </div>

                        <div class=" col-md-2 form-floating mb-3">
                            <input type="text" class="form-control" id="floatingInput" />
                            <label for="floatingInput">ระยะเวลาศึกษา(ปี)</label>
                        </div>

                        <div class="col-md-2 form-floating mb-3">
                            <select class="form-select" id="floatingSelectGrid">
                                <option value="ภาคปกติ">ปกติ</option>
                                <option value="ภาคสมทบ">***สมทบ</option>
                            </select>
                            <label for="floatingSelectGrid">ภาค</label>
                        </div>

                    </div>

                    <div class="row gx-1 mb-5">

                        <div class=" col-md-6 form-floating mb-3">
                            <input type="text" class="form-control" id="floatingInput" />
                            <label for="floatingInput">เบอร์โทรติดต่อนักศึกษา</label>
                        </div>

                        <div class=" col-md-6 form-floating mb-3">
                            <input type="email" class="form-control" id="floatingInput" />
                            <label for="floatingInput">อีเมลติดต่อนักศึกษา</label>
                        </div>

                    </div>

                    <div class="row gx-1">

                        <div class=" col-md-12  ms-2 mb-3">
                            <label for="มีความประสงค์ลงทะเบียนเทียบรายวิชาใน" >มีความประสงค์ขอ</label>
                        </div>

                        <div class=" col-md-2 form-floating mb-3">
                            <select class="form-select" id="floatingSelectGrid">
                                <option value="ปวช">ลาป่วย</option>
                                <option value="ปวส">ลากิจ</option>
                            </select>
                            <label for="floatingSelectGrid">ความประสงค์</label>
                        </div>

                        <div class=" col-md-2 form-floating mb-3">
                            <input type="text" class="form-control" id="floatingInput"></input>
                            <label for="floatingInput">มีกำหนดระยะเวลา(วัน)</label>
                        </div>

                        <div class=" col-md-2 form-floating mb-3">
                            <input type="date" class="form-control" id="floatingInput"></input>
                            <label for="floatingInput">ตั้งแต่วันที่</label>
                        </div>

                        <div class=" col-md-2 form-floating mb-3">
                            <input type="date" class="form-control" id="floatingInput"></input>
                            <label for="floatingInput">ถึงวันที่</label>
                        </div>

                    </div>

                    <div class=" col-md-12 form-floating mb-3">
                        <input type="text" class="form-control" id="floatingInput" />
                        <label for="floatingInput">เนื่องจาก</label>
                    </div>

                    <div class=" col-md-12 mb-3">
                        <label for="formFile" class="form-label">อัพโหลดไฟล์ที่เกี่ยวข้อง (1 ไฟล์)</label>
                        <input class="form-control" type="file" id="formFile"/>
                    </div>

                    <div class="d-grid gap-2 col-md-6 my-3 mx-auto ">
                        <button class="btn btn-primary" type="button">ส่งคำร้อง</button>
                    </div>

                </div>
            </div>
            {/* </div> */}
        </>
    );
}

export default R23;
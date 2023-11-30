import { Link } from 'react-router-dom'

function Navbar() {
  return (
      <>
          <nav class="navbar navbar-default navbar-fixed-top  bg-primary navbar-dark">
              <div class="container-fluid">

                  <div class="d-flex">

                      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                          <span class="navbar-toggler-icon"></span>
                      </button>


                      <Link class="navbar-brand ms-2" to="/">RMUTI Form Requester</Link>

                  </div>

                  <div class="dropdown">
                      <button class="btn text-light dropdown-toggle align-items-center d-none d-sm-none d-md-flex" type="button" data-bs-toggle="dropdown" aria-expanded="false">

                          <svg xmlns="http://www.w3.org/2000/svg" 
                          width="30" height="30" 
                          fill="currentColor" 
                          class="bi bi-person-circle me-1" 
                          viewBox="0 0 16 16">
                              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                              <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                          </svg>
                          phuminan.an@rmuti.ac.th
                      </button>
                      <ul class="dropdown-menu dropdown-menu-end ">
                          <li><a class="dropdown-item" href="#">Profile</a></li>
                          <li><a class="dropdown-item" href="#">Logout</a></li>
                          <li><a class="dropdown-item" href="#">Something else here</a></li>
                      </ul>
                  </div>


                  <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                      <div class="offcanvas-header">
                          <h5 class="offcanvas-title" id="offcanvasDarrLabel ">Menu</h5>
                          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                      </div>
                      <div class="offcanvas-body text-bg-dark">
                          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                              <li class="nav-item">
                                  <a class="nav-link active" aria-current="page" href="#">หน้าหลัก แสดง table คำร้อง (active เป็นตัวหนังสือเข้ม)</a>
                              </li>
                              <li class="nav-item">
                                  <a class="nav-link" href="#">หน้าสอง</a>
                              </li>

                              <li class="nav-item">
                                  <a class="nav-link" href="#">อนุมัติ/เรียกดูคำร้อง (สำหรับ role เจ้าหน้าที่และอาจารย์)</a>
                              </li>
                              <li class="nav-item dropdown">
                                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                      ยื่นคำร้อง (สำหรับ role นศ)
                                  </a>
                                  <ul class="dropdown-menu dropdown-menu-dark ">
                                      <li><Link class="dropdown-item" to="/r01">R.01 คำร้องทั่วไป</Link></li>
                                      <li><Link class="dropdown-item" to="/r11"> R.11 คำร้องขอลงทะเบียนเรียนเทียบรายวิชา</Link></li>
                                      <li><Link class="dropdown-item" to="/r16"> R.16 คำร้องขอเพิ่มที่นั่ง</Link></li>
                                      <li><Link class="dropdown-item" to="/r17"> R.17 คำร้องขอเปิดรายวิชาเรียน</Link></li>
                                      <li><Link class="dropdown-item" to="/r23"> R.23 คำร้องขอลาป่วย/ลากิจ</Link></li>


                                      <li>
                                          <hr class="dropdown-divider" />
                                      </li>
                                      <li><a class="dropdown-item" href="#">Something else here</a></li>
                                  </ul>
                              </li>


                              <li class="nav-item">
                                  <a class="nav-link" href="#">จัดการสิทธิ์ (สำหรับ role ผู้ดูแลระบบ)</a>
                              </li>


                              <li>
                                  <hr class="divider" />

                              </li>

                              <div class="dropdown d-md-none">
                                  <a class="nav-link dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                      <svg xmlns="http://www.w3.org/2000/svg"
                                          width="30" height="30"
                                          fill="currentColor"
                                          class="bi bi-person me-1"
                                          viewBox="0 0 16 16">
                                          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                                      </svg> phuminan.an@rmuti.ac.th
                                  </a>
                                  <ul class="dropdown-menu dropdown-menu-dark">
                                      <li><a class="dropdown-item" href="#">Profile</a></li>
                                      <li><a class="dropdown-item" href="#">Logout</a></li>
                                      <li><a class="dropdown-item" href="#">Something else here</a></li>
                                  </ul>
                              </div>

                          </ul>

                      </div>

                  </div>
              </div>
          </nav>

      </>
  );
}

export default Navbar;
import React, { Component } from "react";
import PropTypes from "prop-types";
import "../DepartmentsList/DepartmentsList.scss";

class DepartmentsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      DepartmentsList: [
        {
          id: "62eebb9b87e02f63859ca4ba",
          departmentsName: "PHÒNG KẾ HOẠCH TỔNG HỢP",
          departmentsLoc: "Nhà A3 bệnh viện",
          departmentsPhone: "033696898",
          departmentsRols: "lên kế hoạch cho dự án của bệnh viện",
        },
        {
          id: "62eec170d46a0ecea5d598a9",
          departmentsName: "PHÒNG TỔ CHỨC CÁN BỘ",
          departmentsLoc: "Nhà A5 bệnh viện",
          departmentsPhone: "012458988",
          departmentsRols: "nơi cán bộ và công nhân viên họp bàn công việc",
        },
        {
          id: "62eec26ad46a0ecea5d598b2",
          departmentsName: "TRUNG TÂM ĐÀO TẠO VÀ CHỈ ĐẠO TUYẾN",
          departmentsLoc: "Nhà A1 bệnh viện",
          departmentsPhone: "022589784",
          departmentsRols: "nơi đào tạo nhân viên của bệnh viện",
        },
        {
          id: "62eec2ded46a0ecea5d598b4",
          departmentsName: "PHÒNG ĐIỀU DƯỠNG",
          departmentsLoc: "Tầng 3 Nhà A4 bệnh viện",
          departmentsPhone: "045698789",
          departmentsRols: "Phụ trách công tác điều dưỡng, chăm sóc sức khỏe, kiểm tra tình trạng bệnh nhân, kê toa thuốc và các công việc khác để phục vụ cho quá trình chăm sóc sức khỏe của bệnh nhân",
        },
        {
          id: "62eec360d46a0ecea5d598b5",
          departmentsName: "PHÒNG TÀI CHÍNH KẾ TOÁN",
          departmentsLoc: "Tầng 8 phòng 311 Nhà A5 bệnh viện",
          departmentsPhone: "0113336569",
          departmentsRols: "Phụ trách quản lý chi tiêu của bệnh viện",
        },
        {
          id: "62eec3c6d46a0ecea5d598b6",
          departmentsName: "PHÒNG HÀNH CHÍNH QUẢN TRỊ",
          departmentsLoc: "Tầng 3 phòng 201 Nhà A1",
          departmentsPhone: "011444555",
          departmentsRols: "Phòng Hành chính quản trị là phòng nghiệp vụ chịu sự  lãnh đạo trực tiếp của Giám đốc Bệnh viện và chịu trách nhiệm trước Giám đốc về toàn bộ công tác hành chính quản trị trong Bệnh viện.",
        },
        {
          id: "62eec453d46a0ecea5d598b7",
          departmentsName: "PHÒNG VẬT TƯ TRANG THIẾT BỊ Y TẾ",
          departmentsLoc: "Nhà B3 bệnh viện",
          departmentsPhone: "045123632",
          departmentsRols: "Phòng chứa và là nơi cung cấp các vật dụng y tế của bệnh viện để phục vụ cho quá trình khám và chữa bệnh",
        },
        {
          id: "62eec4f5d46a0ecea5d598b8",
          departmentsName: "PHÒNG QUẢN LÝ KHOA HỌC VÀ ĐÀO TẠO",
          departmentsLoc: "Tầng 8 Nhà C1 bệnh viện",
          departmentsPhone: "089978898",
          departmentsRols: "Nơi nghiên cứu khoa học và là nơi đào tạo nhân viên của bệnh viện",
        },
        {
          id: "62eec55ed46a0ecea5d598b9",
          departmentsName: "BAN THÔNG TIN TUYÊN TRUYỀN",
          departmentsLoc: "Tầng 2 nhà A3 bệnh viện",
          departmentsPhone: "012345679",
          departmentsRols: "Phòng họp báo, nơi trưng bày các hiện vật, báo và thành tích huân chương lao động của bệnh viện",
        },
        {
          id: "62eec5cad46a0ecea5d598ba",
          departmentsName: "PHÒNG CÔNG NGHỆ THÔNG TIN",
          departmentsLoc: "Tầng 7 Nhà C1 bệnh viện",
          departmentsPhone: "011222333",
          departmentsRols: "Nơi lập trình viên làm việc, quản lý và xử lí dữ liệu của bệnh nhân",
        },
      ],
    };
  }

  render() {
    const { DepartmentsList } = this.state;
    return (
      <ul className="container mt-5 list-group">
        <h1 className="text-center">Departments</h1>
        {DepartmentsList.map((departments, index) => {
          return (
            <div className="departments_list mt-5">
              <div className="bg-dark mb-2 text-white text-center">STT: {index+1}</div>
              <div key={departments.id}>
                <li className="list-group-item border-dark">
                  Tên: {departments.departmentsName}{" "}
                </li>
                <li className="list-group-item border-dark">
                  Địa chỉ: {departments.departmentsLoc}{" "}
                </li>
                <li className="list-group-item border-dark">
                  Số Điện Thoại: {departments.departmentsPhone}{" "}
                </li>
                <li className="list-group-item border-dark mb-5">
                  Địa chỉ: {departments.departmentsRols}{" "}
                </li>
              </div>
            </div>
          );
        })}
      </ul>
    );
  }
}

DepartmentsList.propTypes = {};

export default DepartmentsList;

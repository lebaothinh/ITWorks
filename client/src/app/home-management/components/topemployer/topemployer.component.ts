import { Component, OnInit } from '@angular/core';
import { Employer } from '../../../models/employer';
import { PLocation } from '../../../models/location';
import { EmployerService } from '../../../services/EmployerService';

@Component({
  selector: 'app-topemployer',
  templateUrl: './topemployer.component.html',
  styleUrls: ['./topemployer.component.css']
})
export class TopemployerComponent implements OnInit {

  constructor(private employerService: EmployerService) { }
  arrEmployers: Employer[] = [
    new Employer("FPT Telecom",`The leading provider of software outsourcing services in Vietnam`,"https://cdn.itviec.com/employers/fpt-telecom/logo/w170/fpt-telecom-logo.jpg?izuuJBPM6GGmevHSS78sgK2y",
    "https://cdn.itviec.com/photos/1363/processed_headline_photo/fpt-telecom-headline_photo.jpg?qJY9gpVATaL7UJb5eP3kojFt","Monday","Friday",[new PLocation("Hồ Chí Minh, Hà Nội, Đà Nẵng",'')],"Outsourcing",1000,"Việt Nam",`“Mọi dịch vụ trên một kết nối”
    FPT Telecom là 1 trong 3 nhà cung cấp dịch vụ viễn thông, Internet hàng đầu Việt Nam và đang dần khẳng định trong top đầu những nhà cung cấp dịch vụ Viễn thông ở khu vực Đông Nam Á như Myanma, Campuchia, Lào, với trên 10.000 nhân viên và 59 chi nhánh trong nước, 8 chi nhánh ở nước ngoài. 
    Các sản phẩm, dịch vụ chính bao gồm: Internet; Truyền hình trả tiền (PAYTV); FPT Play; Fshare; Giám sát từ xa (IP Camera), Chứng thực chữ ký số (CA), Điện toán đám mây (Cloud computing); Mobility ...
    Phòng/Ban/Trung Tâm IT lớn:
    
    R&D: Nghiên cứu các giải pháp cho hệ thống kinh doanh, bao gồm các phòng: System, BigData, Mobile, Design, VAS ...
    Ban Dự Án Startup: Quản lý hệ thống các dự án: FPTPlay, FShare, ITVAd
    ISC: Trung tâm hệ thống thông tin: quản lý các dữ liệu, hệ thống IT cho các phòng/ban
    FPT Telecom luôn mở cửa chào đón các bạn, hãy gia nhập cùng đội ngũ trẻ trung, năng động và nhiệt huyết!`),
    new Employer("FPT Telecom",`The leading provider of software outsourcing services in Vietnam`,"https://cdn.itviec.com/employers/fpt-telecom/logo/w170/fpt-telecom-logo.jpg?izuuJBPM6GGmevHSS78sgK2y",
    "https://cdn.itviec.com/photos/1363/processed_headline_photo/fpt-telecom-headline_photo.jpg?qJY9gpVATaL7UJb5eP3kojFt","Monday","Friday",[new PLocation("Hồ Chí Minh, Hà Nội, Đà Nẵng",'')],"Outsourcing",1000,"Việt Nam",`“Mọi dịch vụ trên một kết nối”
    FPT Telecom là 1 trong 3 nhà cung cấp dịch vụ viễn thông, Internet hàng đầu Việt Nam và đang dần khẳng định trong top đầu những nhà cung cấp dịch vụ Viễn thông ở khu vực Đông Nam Á như Myanma, Campuchia, Lào, với trên 10.000 nhân viên và 59 chi nhánh trong nước, 8 chi nhánh ở nước ngoài. 
    Các sản phẩm, dịch vụ chính bao gồm: Internet; Truyền hình trả tiền (PAYTV); FPT Play; Fshare; Giám sát từ xa (IP Camera), Chứng thực chữ ký số (CA), Điện toán đám mây (Cloud computing); Mobility ...
    Phòng/Ban/Trung Tâm IT lớn:
    
    R&D: Nghiên cứu các giải pháp cho hệ thống kinh doanh, bao gồm các phòng: System, BigData, Mobile, Design, VAS ...
    Ban Dự Án Startup: Quản lý hệ thống các dự án: FPTPlay, FShare, ITVAd
    ISC: Trung tâm hệ thống thông tin: quản lý các dữ liệu, hệ thống IT cho các phòng/ban
    FPT Telecom luôn mở cửa chào đón các bạn, hãy gia nhập cùng đội ngũ trẻ trung, năng động và nhiệt huyết!`),
    new Employer("FPT Telecom",`The leading provider of software outsourcing services in Vietnam`,"https://cdn.itviec.com/employers/fpt-telecom/logo/w170/fpt-telecom-logo.jpg?izuuJBPM6GGmevHSS78sgK2y",
    "https://cdn.itviec.com/photos/1363/processed_headline_photo/fpt-telecom-headline_photo.jpg?qJY9gpVATaL7UJb5eP3kojFt","Monday","Friday",[new PLocation("Hồ Chí Minh, Hà Nội, Đà Nẵng",'')],"Outsourcing",1000,"Việt Nam",`“Mọi dịch vụ trên một kết nối”
    FPT Telecom là 1 trong 3 nhà cung cấp dịch vụ viễn thông, Internet hàng đầu Việt Nam và đang dần khẳng định trong top đầu những nhà cung cấp dịch vụ Viễn thông ở khu vực Đông Nam Á như Myanma, Campuchia, Lào, với trên 10.000 nhân viên và 59 chi nhánh trong nước, 8 chi nhánh ở nước ngoài. 
    Các sản phẩm, dịch vụ chính bao gồm: Internet; Truyền hình trả tiền (PAYTV); FPT Play; Fshare; Giám sát từ xa (IP Camera), Chứng thực chữ ký số (CA), Điện toán đám mây (Cloud computing); Mobility ...
    Phòng/Ban/Trung Tâm IT lớn:
    
    R&D: Nghiên cứu các giải pháp cho hệ thống kinh doanh, bao gồm các phòng: System, BigData, Mobile, Design, VAS ...
    Ban Dự Án Startup: Quản lý hệ thống các dự án: FPTPlay, FShare, ITVAd
    ISC: Trung tâm hệ thống thông tin: quản lý các dữ liệu, hệ thống IT cho các phòng/ban
    FPT Telecom luôn mở cửa chào đón các bạn, hãy gia nhập cùng đội ngũ trẻ trung, năng động và nhiệt huyết!`),
    new Employer("FPT Telecom",`The leading provider of software outsourcing services in Vietnam`,"https://cdn.itviec.com/employers/fpt-telecom/logo/w170/fpt-telecom-logo.jpg?izuuJBPM6GGmevHSS78sgK2y",
    "https://cdn.itviec.com/photos/1363/processed_headline_photo/fpt-telecom-headline_photo.jpg?qJY9gpVATaL7UJb5eP3kojFt","Monday","Friday",[new PLocation("Hồ Chí Minh, Hà Nội, Đà Nẵng",'')],"Outsourcing",1000,"Việt Nam",`“Mọi dịch vụ trên một kết nối”
    FPT Telecom là 1 trong 3 nhà cung cấp dịch vụ viễn thông, Internet hàng đầu Việt Nam và đang dần khẳng định trong top đầu những nhà cung cấp dịch vụ Viễn thông ở khu vực Đông Nam Á như Myanma, Campuchia, Lào, với trên 10.000 nhân viên và 59 chi nhánh trong nước, 8 chi nhánh ở nước ngoài. 
    Các sản phẩm, dịch vụ chính bao gồm: Internet; Truyền hình trả tiền (PAYTV); FPT Play; Fshare; Giám sát từ xa (IP Camera), Chứng thực chữ ký số (CA), Điện toán đám mây (Cloud computing); Mobility ...
    Phòng/Ban/Trung Tâm IT lớn:
    
    R&D: Nghiên cứu các giải pháp cho hệ thống kinh doanh, bao gồm các phòng: System, BigData, Mobile, Design, VAS ...
    Ban Dự Án Startup: Quản lý hệ thống các dự án: FPTPlay, FShare, ITVAd
    ISC: Trung tâm hệ thống thông tin: quản lý các dữ liệu, hệ thống IT cho các phòng/ban
    FPT Telecom luôn mở cửa chào đón các bạn, hãy gia nhập cùng đội ngũ trẻ trung, năng động và nhiệt huyết!`),
    new Employer("FPT Telecom",`The leading provider of software outsourcing services in Vietnam`,"https://cdn.itviec.com/employers/fpt-telecom/logo/w170/fpt-telecom-logo.jpg?izuuJBPM6GGmevHSS78sgK2y",
    "https://cdn.itviec.com/photos/1363/processed_headline_photo/fpt-telecom-headline_photo.jpg?qJY9gpVATaL7UJb5eP3kojFt","Monday","Friday",[new PLocation("Hồ Chí Minh, Hà Nội, Đà Nẵng",'')],"Outsourcing",1000,"Việt Nam",`“Mọi dịch vụ trên một kết nối”
    FPT Telecom là 1 trong 3 nhà cung cấp dịch vụ viễn thông, Internet hàng đầu Việt Nam và đang dần khẳng định trong top đầu những nhà cung cấp dịch vụ Viễn thông ở khu vực Đông Nam Á như Myanma, Campuchia, Lào, với trên 10.000 nhân viên và 59 chi nhánh trong nước, 8 chi nhánh ở nước ngoài. 
    Các sản phẩm, dịch vụ chính bao gồm: Internet; Truyền hình trả tiền (PAYTV); FPT Play; Fshare; Giám sát từ xa (IP Camera), Chứng thực chữ ký số (CA), Điện toán đám mây (Cloud computing); Mobility ...
    Phòng/Ban/Trung Tâm IT lớn:
    
    R&D: Nghiên cứu các giải pháp cho hệ thống kinh doanh, bao gồm các phòng: System, BigData, Mobile, Design, VAS ...
    Ban Dự Án Startup: Quản lý hệ thống các dự án: FPTPlay, FShare, ITVAd
    ISC: Trung tâm hệ thống thông tin: quản lý các dữ liệu, hệ thống IT cho các phòng/ban
    FPT Telecom luôn mở cửa chào đón các bạn, hãy gia nhập cùng đội ngũ trẻ trung, năng động và nhiệt huyết!`),
    new Employer("FPT Telecom",`The leading provider of software outsourcing services in Vietnam`,"https://cdn.itviec.com/employers/fpt-telecom/logo/w170/fpt-telecom-logo.jpg?izuuJBPM6GGmevHSS78sgK2y",
    "https://cdn.itviec.com/photos/1363/processed_headline_photo/fpt-telecom-headline_photo.jpg?qJY9gpVATaL7UJb5eP3kojFt","Monday","Friday",[new PLocation("Hồ Chí Minh, Hà Nội, Đà Nẵng",'')],"Outsourcing",1000,"Việt Nam",`“Mọi dịch vụ trên một kết nối”
    FPT Telecom là 1 trong 3 nhà cung cấp dịch vụ viễn thông, Internet hàng đầu Việt Nam và đang dần khẳng định trong top đầu những nhà cung cấp dịch vụ Viễn thông ở khu vực Đông Nam Á như Myanma, Campuchia, Lào, với trên 10.000 nhân viên và 59 chi nhánh trong nước, 8 chi nhánh ở nước ngoài. 
    Các sản phẩm, dịch vụ chính bao gồm: Internet; Truyền hình trả tiền (PAYTV); FPT Play; Fshare; Giám sát từ xa (IP Camera), Chứng thực chữ ký số (CA), Điện toán đám mây (Cloud computing); Mobility ...
    Phòng/Ban/Trung Tâm IT lớn:
    
    R&D: Nghiên cứu các giải pháp cho hệ thống kinh doanh, bao gồm các phòng: System, BigData, Mobile, Design, VAS ...
    Ban Dự Án Startup: Quản lý hệ thống các dự án: FPTPlay, FShare, ITVAd
    ISC: Trung tâm hệ thống thông tin: quản lý các dữ liệu, hệ thống IT cho các phòng/ban
    FPT Telecom luôn mở cửa chào đón các bạn, hãy gia nhập cùng đội ngũ trẻ trung, năng động và nhiệt huyết!`)
  ]
  ngOnInit() {
    
  }
  
  
}

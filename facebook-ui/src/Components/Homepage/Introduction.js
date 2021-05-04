const Introduction = () => {
  return (
    <div className="introduce">
      <div className="introduce_content">
        <span style={{
          color: 'black',
          fontSize: '20px'
        }}><b>Giới thiệu</b></span>
      </div>
      <div className="introduce_action">
        <div className="introduce_icon" style={{
          float: 'left',
          width: '10%',
          marginLeft: '5%'
        }}>
          <img src={'https://www.facebook.com/rsrc.php/v3/yk/r/M0Wls5DHC-A.png'} width="20px" height="20px" alt="Logo" />
        </div>
        <div className="introduce_" style={{
          float: 'left',
          width: '80%'
        }}>
          <span style={{
            color: '#050505',
            fontSize: '15px'
            }}>Đã làm việc tại <strong>FPT Software</strong></span>
        </div><br/><br/>
        <div className="introduce_icon" style={{
          float: 'left',
          width: '10%',
          marginLeft: '5%'
        }}>
          <img src={'https://www.facebook.com/rsrc.php/v3/yd/r/id4jdGYPaIP.png'} width="20px" height="20px" alt="Logo" />
        </div>
        <div className="introduce_" style={{
          float: 'left',
          width: '80%'
        }}>
          <span style={{
            color: '#050505',
            fontSize: '15px'
            }}>Học Kĩ thuật tại <strong>Đại học FPT Hà Nội</strong></span>
        </div><br/><br/>
        <div className="introduce_icon" style={{
          float: 'left',
          width: '10%',
          marginLeft: '5%'
        }}>
          <img src={'https://www.facebook.com/rsrc.php/v3/yd/r/id4jdGYPaIP.png'} width="20px" height="20px" alt="Logo" />
        </div>
        <div className="introduce_" style={{
          float: 'left',
          width: '80%'
        }}>
          <span style={{
            color: '#050505',
            fontSize: '15px'
            }}>Đã học tại <strong>Trường Thpt Ngô Quyền</strong></span>
        </div><br/><br/>
        <div className="introduce_icon" style={{
          float: 'left',
          width: '10%',
          marginLeft: '5%'
        }}>
          <img src={'https://www.facebook.com/rsrc.php/v3/ym/r/N_tq7yNW9DG.png'} width="20px" height="20px" alt="Logo" />
        </div>
        <div className="introduce_" style={{
          float: 'left',
          width: '80%'
        }}>
          <span style={{
            color: '#050505',
            fontSize: '15px'
            }}>Đến từ <strong>Hải Phòng</strong></span>
        </div><br/><br/>
        <div className="introduce_icon" style={{
          float: 'left',
          width: '10%',
          marginLeft: '5%'
        }}>
          <img src={'https://www.facebook.com/rsrc.php/v3/yq/r/S0aTxIHuoYO.png'} width="20px" height="20px" alt="Logo" />
        </div>
        <div className="introduce_" style={{
          float: 'left',
          width: '80%'
        }}>
          <span style={{
            color: '#050505',
            fontSize: '15px'
            }}>Độc thân</span>
        </div><br/><br/>
        <button style={{
          width: '95%',
          height: '36px',
          backgroundColor: '#e4e6eb',
          color: '#050505',
          border: 'none',
          borderRadius:'5px',
          marginLeft: '5%'
        }}
                type="submit"><b>Chỉnh sửa chi tiết</b></button><br/><br/>
        <button style={{
          width: '95%',
          height: '36px',
          backgroundColor: '#e4e6eb',
          color: '#050505',
          border: 'none',
          borderRadius:'5px',
          marginLeft: '5%'
        }}
                type="submit"><b>Thêm sở thích</b></button><br/><br/>
        <button style={{
          width: '95%',
          height: '36px',
          backgroundColor: '#e4e6eb',
          color: '#050505',
          border: 'none',
          borderRadius:'5px',
          marginLeft: '5%'
        }}
                type="submit"><b>Chỉnh sửa phần Đáng chú ý</b></button><br/><br/><br/>
      </div>
    </div>
  );
}

export default Introduction;

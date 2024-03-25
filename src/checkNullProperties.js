function checkNullProperties(obj) {
    let hasNull = false;
  
    // Duyệt qua các thuộc tính của object
    Object.keys(obj).forEach(key => {
      const value = obj[key];
  
      // Kiểm tra nếu giá trị là null
      if (value === null || value ==='') {
      
        hasNull = true;
      }  
    });
  
    return hasNull;
  }
  export default checkNullProperties;
export interface User {
  userid:Number;
  name: String;
  className: String;
  section: String;
  proDetail: [
    {
      proId:Number;
      term: Number;
      proname: String;
      marks: Number;
    }
  ];
}

var t=Object.defineProperty,__publicField=(e,s,r)=>(((e,s,r)=>{s in e?t(e,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[s]=r})(e,"symbol"!=typeof s?s+"":s,r),r);import{b as e,F as s,T as r,S as a,c as i,d as o}from"./axios.d08fb926.js";import{E as m,x as c}from"./index.733d2757.js";var n=(t=>(t.YYYY_MM_DD_HH_mm_ss="YYYY-MM-DD HH:mm:ss",t.YYYY_MM_DD_HH_mm="YYYY-MM-DD HH:mm",t.TIMESTAMP="x",t.MM_DD_HH_mm="MM-DD HH:mm",t.YYYY_MM_DD="YYYY-MM-DD",t.HH_mm_ss="HH:mm:ss",t))(n||{}),u=(t=>(t.SUCCESS="#61c653",t.WARNING="#f4bf4f",t.DANGER="#ed6a5e",t.NORMAL="#bbbbbb",t))(u||{});class AirAbstractEntity extends e{setId(t){return this.id=t,this}setCreateTime(t){return this.createTime=t,this}setUpdateTime(t){return this.updateTime=t,this}setIsDisabled(t){return this.isDisabled=t,this}setStatus(t){return this.status=t,this}}var p=Object.defineProperty,b=Object.getOwnPropertyDescriptor,__decorateClass$1=(t,e,s,r)=>{for(var a,i=r>1?void 0:r?b(e,s):e,o=t.length-1;o>=0;o--)(a=t[o])&&(i=(r?a(e,s,i):a(i))||i);return r&&i&&p(e,s,i),i};const d=[{key:!0,label:"已禁用",color:u.DANGER},{key:!1,label:"已启用",color:u.SUCCESS}];class AbstractBaseEntity extends AirAbstractEntity{constructor(){super(...arguments),__publicField(this,"id"),__publicField(this,"createTime"),__publicField(this,"updateTime"),__publicField(this,"isDisabled"),__publicField(this,"remark")}}__decorateClass$1([s("ID"),m()],AbstractBaseEntity.prototype,"id",2),__decorateClass$1([s("创建时间"),r({dateTimeFormatter:n.MM_DD_HH_mm,sortable:"custom"}),m()],AbstractBaseEntity.prototype,"createTime",2),__decorateClass$1([s("修改时间"),r({dateTimeFormatter:n.MM_DD_HH_mm,sortable:"custom"}),m()],AbstractBaseEntity.prototype,"updateTime",2),__decorateClass$1([s("是否禁用"),r({enumRecord:d,showLight:!0}),a({enumRecord:d}),m()],AbstractBaseEntity.prototype,"isDisabled",2),__decorateClass$1([s("备注"),a({dataType:c.TEXTAREA}),m()],AbstractBaseEntity.prototype,"remark",2);var y=Object.defineProperty,h=Object.getOwnPropertyDescriptor,__decorateClass=(t,e,s,r)=>{for(var a,i=r>1?void 0:r?h(e,s):e,o=t.length-1;o>=0;o--)(a=t[o])&&(i=(r?a(e,s,i):a(i))||i);return r&&i&&y(e,s,i),i},D=(t=>(t[t.VERIFYING=1]="VERIFYING",t[t.VERIFIED=2]="VERIFIED",t))(D||{});const l=[{key:2,label:"已认证",color:u.SUCCESS},{key:1,label:"认证中",color:u.NORMAL}];let E=class extends AbstractBaseEntity{constructor(){super(...arguments),__publicField(this,"userAccount"),__publicField(this,"userPassword"),__publicField(this,"userName"),__publicField(this,"age"),__publicField(this,"status")}setUserName(t){return this.userName=t,this}setStatus(t){return this.status=t,this}setAge(t){return this.age=t,this}};__decorateClass([s("账号"),m()],E.prototype,"userAccount",2),__decorateClass([s(""),m()],E.prototype,"userPassword",2),__decorateClass([s("用户昵称"),a(),r(),m()],E.prototype,"userName",2),__decorateClass([s("芳龄"),r(),a({dataType:c.NUMBER}),i({dataType:c.NUMBER}),m({name:"ages"})],E.prototype,"age",2),__decorateClass([s("启用状态"),r({enumRecord:l,showLight:!0}),a({enumRecord:l}),m()],E.prototype,"status",2),E=__decorateClass([o("用户")],E);export{n as A,D as S,E as U,u as a};
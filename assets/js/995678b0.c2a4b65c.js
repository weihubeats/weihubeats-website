"use strict";(self.webpackChunkweihubeats_website=self.webpackChunkweihubeats_website||[]).push([[1831],{4070:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"java/spring-boot/spring boot\u63a5\u53e3\u5982\u4f55\u8fdb\u884c\u96c6\u6210\u6d4b\u8bd5","title":"spring boot\u63a5\u53e3\u5982\u4f55\u8fdb\u884c\u96c6\u6210\u6d4b\u8bd5","description":"\u80cc\u666f","source":"@site/docs/java/spring-boot/spring boot\u63a5\u53e3\u5982\u4f55\u8fdb\u884c\u96c6\u6210\u6d4b\u8bd5.md","sourceDirName":"java/spring-boot","slug":"/java/spring-boot/spring boot\u63a5\u53e3\u5982\u4f55\u8fdb\u884c\u96c6\u6210\u6d4b\u8bd5","permalink":"/weihubeats/docs/java/spring-boot/spring boot\u63a5\u53e3\u5982\u4f55\u8fdb\u884c\u96c6\u6210\u6d4b\u8bd5","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/java/spring-boot/spring boot\u63a5\u53e3\u5982\u4f55\u8fdb\u884c\u96c6\u6210\u6d4b\u8bd5.md","tags":[],"version":"current","frontMatter":{},"sidebar":"springboot","previous":{"title":"spring boot 2.x\u5347\u7ea7\u52303.x\u5b9e\u6218","permalink":"/weihubeats/docs/java/spring-boot/spring boot 2.x\u5347\u7ea7\u52303.x\u5b9e\u6218"},"next":{"title":"\u4e3a\u4ec0\u4e48spring boot 3\u53c2\u6570\u540d\u79f0\u89e3\u6790\u8981\u5e9f\u5f03LocalVariableTableParameterNameDiscoverer","permalink":"/weihubeats/docs/java/spring-boot/\u4e3a\u4ec0\u4e48spring boot 3\u53c2\u6570\u540d\u79f0\u89e3\u6790\u8981\u5e9f\u5f03LocalVariableTableParameterNameDiscoverer"}}');var i=s(4848),r=s(8453);const t={},c=void 0,l={},d=[{value:"\u80cc\u666f",id:"\u80cc\u666f",level:2},{value:"\u96c6\u6210\u6d4b\u8bd5",id:"\u96c6\u6210\u6d4b\u8bd5",level:2},{value:"\u624b\u52a8\u6ce8\u5165controller\u8fdb\u884c\u6d4b\u8bd5",id:"\u624b\u52a8\u6ce8\u5165controller\u8fdb\u884c\u6d4b\u8bd5",level:3},{value:"\u57fa\u4e8eTestRestTemplate\u8fdb\u884c\u6d4b\u8bd5",id:"\u57fa\u4e8etestresttemplate\u8fdb\u884c\u6d4b\u8bd5",level:3},{value:"\u57fa\u4e8eMockMvc\u8fdb\u884c\u6d4b\u8bd5",id:"\u57fa\u4e8emockmvc\u8fdb\u884c\u6d4b\u8bd5",level:3},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:3},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"\u80cc\u666f",children:"\u80cc\u666f"}),"\n",(0,i.jsxs)(n.p,{children:["\u76f8\u4fe1\u521d\u5b66",(0,i.jsx)(n.code,{children:"spring boot"}),"\u7684\u540c\u5b66\u5728\u5404\u5927\u57f9\u8bad\u89c6\u9891\u6216\u8005\u6559\u7a0b\u4e2d\u90fd\u4f1a\u6559\u4f60\u5982\u4f55\u7f16\u5199\u63a5\u53e3\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u6bd4\u5982\u6211\u4eec\u8981\u5199\u4e00\u4e2a\u63a5\u53e3\u5f88\u7b80\u5355"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'@RestController\n@RequestMapping("")\n@Slf4j\npublic class XiaoZouController {\n\n\n    @GetMapping("/xiaozou")\n    public String testByXiaoZouJiShu(TestDTO testDTO) {\n        return testDTO;\n    }\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u52a0\u51e0\u4e2a\u6ce8\u89e3\uff0c\u4e00\u4e2a\u63a5\u53e3\u5c31\u5b8c\u6210\u4e86\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u5982\u679c\u8981\u6d4b\u8bd5\u6211\u4eec\u4e00\u822c\u5c31\u662f\u901a\u8fc7",(0,i.jsx)(n.code,{children:"postman"}),"\u6216\u8005",(0,i.jsx)(n.code,{children:"apifox"}),"\u6765\u6d4b\u8bd5\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u4f7f\u7528\u8fd9\u4e24\u79cd\u65b9\u5f0f\u6d4b\u8bd5\u6709\u4e2a\u7f3a\u70b9\u5c31\u662f\u6d4b\u8bd5\u7528\u4f8b\u5f88\u96be\u590d\u7528\uff0c\u5176\u6b21\u65e0\u6cd5\u5728ci/cd\u4e2d\u8fdb\u884c\u81ea\u52a8\u5316\u6d4b\u8bd5\u3002"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"\u90e8\u5206api\u7ba1\u7406\u5de5\u5177\u652f\u6301\u4fdd\u5b58\u6d4b\u8bd5\u7528\u4f8b\uff0c\u4f46\u662f\u59cb\u7ec8\u662f\u548c\u4ee3\u7801\u5206\u79bb\u7684\uff0c\u4e0d\u5229\u4e8e\u7ef4\u62a4"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u6240\u4ee5\u4e3a\u4e86\u63a5\u53e3\u7684\u6d4b\u8bd5\uff0c\u6211\u4eec\u9700\u8981\u7f16\u5199\u96c6\u6210\u6d4b\u8bd5\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u9057\u61be\u7684\u662f\u5f88\u591a\u5f00\u53d1\u5f88\u5c11\u4e86\u89e3\u5728",(0,i.jsx)(n.code,{children:"spring boot"}),"\u4e2d\u5982\u4f55\u7f16\u5199\u96c6\u6210\u6d4b\u8bd5\uff0c\u63a5\u4e0b\u6765\u6211\u4eec\u5c31\u6765\u8be6\u7ec6\u8ba8\u8bba\u4e0b",(0,i.jsx)(n.code,{children:"spring boot"}),"\u79cd\u7684\u96c6\u6210\u6d4b\u8bd5"]}),"\n",(0,i.jsx)(n.h2,{id:"\u96c6\u6210\u6d4b\u8bd5",children:"\u96c6\u6210\u6d4b\u8bd5"}),"\n",(0,i.jsxs)(n.p,{children:["\u5728",(0,i.jsx)(n.code,{children:"spring boot"}),"\u4e2d\u96c6\u6210\u6d4b\u8bd5\u7684\u65b9\u5f0f\u6709\u5f88\u591a\uff0c\u6211\u4eec\u63a5\u4e0b\u6765\u4e00\u4e00\u8ba8\u8bba\uff0c\u770b\u770b\u54ea\u79cd\u65b9\u5f0f\u6700\u5408\u9002\u3001\u6700\u4f18\u96c5"]}),"\n",(0,i.jsx)(n.h3,{id:"\u624b\u52a8\u6ce8\u5165controller\u8fdb\u884c\u6d4b\u8bd5",children:"\u624b\u52a8\u6ce8\u5165controller\u8fdb\u884c\u6d4b\u8bd5"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"spring boot"}),"\u63d0\u4f9b\u4e86",(0,i.jsx)(n.code,{children:"@SpringBootTest"}),"\u6ce8\u89e3\u6765\u8fdb\u884c\u96c6\u6210\u6d4b\u8bd5\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u4e00\u822c\u4eba\u6d4b\u8bd5",(0,i.jsx)(n.code,{children:"controller"}),"\u90fd\u4f1a\u8fd9\u6837\u6d4b\u8bd5"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'@SpringBootTest\n@Profile("dev")\nclass XiaoZouController {\n\n    @Autowired\n    private XiaoZouController xiaoZouController;\n\n    @Test\n    public void testController() {\n        TestDTO testDTO = new TestDTO();\n        String xiaoZouJiShu = xiaoZouController.testByXiaoZouJiShu(testDTO);\n        assertEquals("xiaoZouJiShu", xiaoZouJiShu);\n    }\n\n}\n\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u4f7f\u7528\u8fd9\u79cd\u65b9\u5f0f\u8fdb\u884c\u6d4b\u8bd5\u6709\u51e0\u4e2a\u7f3a\u70b9"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\u65e0\u6cd5\u6a21\u62df",(0,i.jsx)(n.code,{children:"http"}),"\u8bf7\u6c42"]}),"\n",(0,i.jsxs)(n.li,{children:["\u4ec5\u80fd\u6d4b\u8bd5",(0,i.jsx)(n.code,{children:"controller"}),"\u7684\u4ee3\u7801\u903b\u8f91\uff0c\u5b9e\u9645\u6d4b\u8bd5\u4e5f\u5c31\u662f",(0,i.jsx)(n.code,{children:"server"}),"\u7684\u903b\u8f91"]}),"\n",(0,i.jsxs)(n.li,{children:["\u50cf\u4e00\u4e9b",(0,i.jsx)(n.code,{children:"http"}),"\u4e2d\u6bd4\u5982",(0,i.jsx)(n.code,{children:"header"}),"\u3001",(0,i.jsx)(n.code,{children:"cookie"}),"\u7b49\u4fe1\u606f\u65e0\u6cd5\u6a21\u62df\uff0c\u6bd4\u5982\u6211\u4eec\u6709\u4e00\u4e9b\u5207\u9762\u8fdb\u884c\u4e86\u8bf7\u6c42\u5934\u7684\u5904\u7406\uff0c\u6bd4\u5982\u6211\u4eec\u4ece",(0,i.jsx)(n.code,{children:"header"}),"\u4e2d\u83b7\u53d6\u4e86",(0,i.jsx)(n.code,{children:"uid"}),"\u7b49\u4fe1\u606f\uff0c\u8fd9\u79cd\u60c5\u51b5\u4e0b\u6211\u4eec\u5c31\u65e0\u6cd5\u8fdb\u884c\u6d4b\u8bd5"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"\u57fa\u4e8etestresttemplate\u8fdb\u884c\u6d4b\u8bd5",children:"\u57fa\u4e8eTestRestTemplate\u8fdb\u884c\u6d4b\u8bd5"}),"\n",(0,i.jsxs)(n.p,{children:["\u5982\u679c\u6211\u4eec\u60f3\u8981\u6a21\u62df",(0,i.jsx)(n.code,{children:"http"}),"\u8bf7\u6c42\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528",(0,i.jsx)(n.code,{children:"TestRestTemplate"}),"\u6765\u8fdb\u884c\u6d4b\u8bd5"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)\n@Profile("dev")\npublic class XiaoZouController {\n\n    @LocalServerPort\n    private int port;\n\n\n    @Autowired\n    private TestRestTemplate restTemplate;\n\n\n    @Test\n    void greetingShouldReturnDefaultMessage() throws Exception {\n        assertThat(this.restTemplate.getForObject("http://localhost:" + port + "/xiaozou", String.class)).contains("xiaozou");\n    }\n    \n}\n'})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)"}),"\u8868\u793a\u968f\u673a\u7aef\u53e3\u542f\u52a8"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"@LocalServerPort"}),"\u8868\u793a\u83b7\u53d6\u968f\u673a\u7aef\u53e3"]}),"\n",(0,i.jsxs)(n.li,{children:["\u4f7f\u7528",(0,i.jsx)(n.code,{children:"TestRestTemplate"}),"\u662f\u6765\u6a21\u62df",(0,i.jsx)(n.code,{children:"http"}),"\u8bf7\u6c42\u7684\u8c03\u7528"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u8fd9\u79cd\u65b9\u5f0f\u6d4b\u8bd5\u4e5f\u6709\u7f3a\u70b9"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"\u542f\u52a8\u4e86\u4e00\u4e2a\u672c\u5730\u670d\u52a1\u5668\uff0c\u542f\u52a8\u6162"}),"\n",(0,i.jsx)(n.li,{children:"\u5bf9\u4e8e\u7ed3\u679c\u6821\u9a8c\u6ca1\u6709\u63d0\u4f9b\u5f00\u7bb1\u5373\u7528\u7684\u65ad\u8a00\u673a\u5236"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"\u57fa\u4e8emockmvc\u8fdb\u884c\u6d4b\u8bd5",children:"\u57fa\u4e8eMockMvc\u8fdb\u884c\u6d4b\u8bd5"}),"\n",(0,i.jsxs)(n.p,{children:["\u5982\u679c\u6211\u4eec\u60f3\u8981\u672c\u5730\u4e0d\u542f\u52a8\u670d\u52a1\u5668\uff0c\u53ea\u662f\u6d4b\u8bd5\u670d\u52a1\u5668\u4e0b\u9762\u7684\u5c42\u6b21\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528",(0,i.jsx)(n.code,{children:"MockMvc"}),"\u6765\u8fdb\u884c\u6d4b\u8bd5"]}),"\n",(0,i.jsxs)(n.p,{children:["\u8fd9\u4e0e\u5904\u7406\u771f\u5b9e\u7684",(0,i.jsx)(n.code,{children:"http"}),"\u8bf7\u6c42\u5904\u7406\u65b9\u5f0f\u4e00\u6837\uff0c\u4f46\u662f\u6ca1\u6709\u670d\u52a1\u5668\u542f\u52a8\u6210\u672c"]}),"\n",(0,i.jsx)(n.p,{children:"\u6d4b\u8bd5\u4ee3\u7801\u5982\u4e0b"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'@SpringBootTest\n@AutoConfigureMockMvc\n@Profile("dev")\npublic class XiaoZouControllerTest {\n\n    @Autowired\n    private MockMvc mockMvc;\n\n    @Test\n    void greetingShouldReturnDefaultMessage() throws Exception {\n        Long uid = 12345L;\n\n        mockMvc.perform(MockMvcRequestBuilders.get("/xiaozou")\n                .header("uid", uid)\n                .contentType(MediaType.APPLICATION_JSON))\n            .andExpect(status().isOk())\n            .andExpect(jsonPath("$.code").value(200))\n            .andExpect(jsonPath("$.data.uid").value(uid))\n            .andExpect(jsonPath("$.data.version").doesNotExist())\n            .andExpect(jsonPath("$.data.deviceId").value(IsNull.nullValue()));\n    }\n\n}\n\n'})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\u6dfb\u52a0",(0,i.jsx)(n.code,{children:"@AutoConfigureMockMvc"}),"\u6ce8\u89e3\u81ea\u52a8\u6ce8\u5165",(0,i.jsx)(n.code,{children:"MockMvc"})]}),"\n",(0,i.jsxs)(n.li,{children:["\u901a\u8fc7",(0,i.jsx)(n.code,{children:"@Autowired"}),"\u6ce8\u5165",(0,i.jsx)(n.code,{children:"MockMvc"}),"\u5bf9\u8c61"]}),"\n",(0,i.jsxs)(n.li,{children:["\u901a\u8fc7",(0,i.jsx)(n.code,{children:"mockMvc"}),"\u8fdb\u884c",(0,i.jsx)(n.code,{children:"http"}),"\u8bf7\u6c42\u6a21\u62df"]}),"\n",(0,i.jsxs)(n.li,{children:["\u901a\u8fc7",(0,i.jsx)(n.code,{children:".hearder"}),"\u6a21\u62df",(0,i.jsx)(n.code,{children:"header"}),"\u4fe1\u606f"]}),"\n",(0,i.jsxs)(n.li,{children:["\u901a\u8fc7",(0,i.jsx)(n.code,{children:".contentType"}),"\u6a21\u62df",(0,i.jsx)(n.code,{children:"content-type"}),"\u4fe1\u606f"]}),"\n",(0,i.jsxs)(n.li,{children:["\u901a\u8fc7",(0,i.jsx)(n.code,{children:".andExpect"}),"\u8fdb\u884c\u7ed3\u679c\u6821\u9a8c"]}),"\n",(0,i.jsxs)(n.li,{children:["\u901a\u8fc7",(0,i.jsx)(n.code,{children:"jsonPath"}),"\u8fdb\u884c",(0,i.jsx)(n.code,{children:"json"}),"\u7ed3\u679c\u6821\u9a8c"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"\u603b\u7ed3",children:"\u603b\u7ed3"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"spring boot"}),"\u4e2d\u6d4b\u8bd5",(0,i.jsx)(n.code,{children:"controller"}),"\u6709\u591a\u79cd\u65b9\u5f0f\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u4f46\u662f\u6211\u89c9\u5f97\u6700\u597d\u7684\u65b9\u5f0f\u8fd8\u662f\u901a\u8fc7",(0,i.jsx)(n.code,{children:"@AutoConfigureMockMvc"}),"\u8fdb\u884c\u6d4b\u8bd5"]}),"\n",(0,i.jsxs)(n.p,{children:["\u4e0d\u7528\u542f\u52a8\u670d\u52a1\u5668\uff0c\u6d4b\u8bd5\u901f\u5ea6\u5feb\uff0c\u800c\u4e14\u53ef\u4ee5\u6a21\u62df",(0,i.jsx)(n.code,{children:"http"}),"\u8bf7\u6c42\uff0c\u5bf9\u4e8e\u7ed3\u679c\u6821\u9a8c\u4e5f\u63d0\u4f9b\u4e86\u5f88\u591a\u7684\u65ad\u8a00\u673a\u5236\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u5bf9\u4e8e\u4e00\u4e9b\u7ecf\u5e38\u53d8\u5316\u7684\u4e1a\u52a1\u63a5\u53e3\u5199\u96c6\u6210\u6d4b\u8bd5\u7684\u610f\u4e49\u4e0d\u662f\u7279\u522b\u5927\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u662f\u5426\u9700\u8981\u7f16\u5199\u96c6\u6210\u6d4b\u8bd5\u8fd8\u662f\u8981\u770b\u63a5\u53e3\u7684\u91cd\u8981\u7a0b\u5ea6\u3001\u9879\u76ee\u7684\u65f6\u95f4\u7b49\u591a\u65b9\u9762\u56e0\u7d20\u6765\u51b3\u5b9a\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u5c0f\u4f19\u5b50\uff0c\u5200\u7ed9\u4f60\u4e86\uff0c\u4ec0\u4e48\u65f6\u5019\u7528\u4f60\u81ea\u5df1\u51b3\u5b9a\u5566"}),"\n",(0,i.jsx)(n.h2,{id:"\u53c2\u8003",children:"\u53c2\u8003"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://spring.io/guides/gs/testing-web",children:"https://spring.io/guides/gs/testing-web"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>c});var o=s(6540);const i={},r=o.createContext(i);function t(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);
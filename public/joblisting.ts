interface ListEntry {
  Company: string;
  Position: string;
  Type: string;
  Location: string[];
  DDL: string;
  JobKeyWord: string[];
  StartTime?: string;
  Length?: string;
  Salary?: string;
  ApplyLink?: URL;
  Description?: string;
  Requirement?: string;
}

export const joblist: ListEntry[] = [
  {
    Company: "Innovis VC",
    Position: "Analyst",
    Type: "Part-time",
    Location: ["London", "Berlin"],
    DDL: "2024-2-23",
    JobKeyWord: ["VC", "Analyst", "Internship"],
    StartTime: "Any",
    Length: "At least one year",
    Salary: "No Salary",
    ApplyLink: new URL("https://www.innovis.vc/join"),
    Description:
      "Innovis VC是一家由学生组织的模拟风投机构，覆盖多个欧洲城市，公司的初衷是增加风投行业的社会/种族多样性，给原本在风投行业underrepresented的学生体验风投的机会。Innovis VC并不直接投资，但是会注重搜索（VC Sourcing）和分析初创企业的过程。 ",
    Requirement: "Matriculated Student",
  },
  {
    Company: "BlackFin Capital Partners",
    Position: "Fintech Venture Capital Analyst",
    Type: "Internship",
    Location: ["London"],
    DDL: "Rolling Basis",
    JobKeyWord: ["VC", "Analyst", "Internship"],
    StartTime: "2024-4",
    Length: "3-4 months",
    Salary: "Competitive Salary",
    ApplyLink: new URL("https://lnkd.in/d5Urhnti"),
    Description:
      "竞争非常激烈，风投行业很卷，企业大致能收到500+超高质量简历, 公司主要关注金融科技公司，对此行业有深度研究和经历的会更有优势",
    Requirement: "Penultimate Year",
  },
  {
    Company: "3X Capital",
    Position: "DeFi Analyst Program",
    Type: "Internship",
    Location: ["remote"],
    DDL: "Rolling Basis",
    JobKeyWord: ["DeFi", "Analyst", "Internship"],
    StartTime: "2024",
    Length: "Unpaid/Educational",
    ApplyLink: new URL("https://3xcapital.fund/careers"),
    Description:
      "3X Capital 是一家专门投资和商业指导Web3.0，Seed-Stage初创企业的风投机构. " +
      "目前有跟头部Web3.0风投机构共同投资（co-invest），涉及的企业有CoinsPaid和https://enjin.io等. " +
      "这个项目开放较新，网上并没公开信息，申请过程也只有上传CV，所以也有可能需要付钱参与。对于很想了解Web3.0/DAO/DeFin行业的同学可以参与",
  },
  {
    Company: "P&G",
    Position: "Insight Week",
    Type: "Internship",
    Location: ["London", "Surrey"],
    DDL: "Rolling Basis",
    JobKeyWord: ["Insight", "Week", "Internship"],
    StartTime: "2024-6-17",
    Length: "Unpaid with potential stipend or gifts",
    ApplyLink: new URL("https://www.pgcareers.com/uk/en/job/R000090394/P-G-Insight-Week"),
    Description:
      "保洁在英国有暑期实习，这份岗位可以convert，所以对保洁有兴趣的要好好把握. 保洁的网测稍有难度，做之前需要多练习. 会在Sales,Brand等部门轮岗，所以简历里可以突出自己的Curiosity和之前类似的轮岗经历，以及重点突出官网列出的这两点",
    Requirement: "大一（苏格兰大二）",
  },
  {
    Company: "HP",
    Position: "Business Management Placement Year",
    Type: "Internship",
    Location: ["Reading"],
    DDL: "Rolling Basis",
    JobKeyWord: ["Business", "Management", "Internship"],
    StartTime: "2024-7",
    Length: "Paid",
    ApplyLink: new URL("https://jobs.hp.com/jobdetails/19258220/business-management-intern-reading-gb/"),
  },
  {
    Company: "Winterfield Securities（Close Brothers）",
    Position: "Insight Week/Work Experience",
    Type: "Internship",
    Location: ["Central London"],
    DDL: "2024-3-7",
    JobKeyWord: ["Insight", "Week", "Internship"],
    StartTime: "2024-6-24",
    Length: "Unpaid with potential stipend or gifts",
    ApplyLink: new URL("https://closebrothers.current-vacancies.com/Jobs/Advert/3396822?cid=1616&s=False&t=Winterflood-Work-Experience-Programme-----&l=London"),
    Description:
      "Winterfield Securities是Close Brothers商业银行旗下的做市商(market-making)的公司. 预计会收到500+高质量的CV，申请时推荐需要在“添加任何可以帮助你application一栏”撰写一篇文书，重点描写自己对金融行业的热爱，之前经历学到的公司，以及突出自己可以take initiative, work under pressure等. 申请者需要证明自己对金融行业的热情，有想关实习经历，特别是交易，在写得好的情况下会加分",
  },
  {
    Company: "Kroll Bond Rating Agency",
    Position: "Research Intern",
    Type: "Internship",
    Location: ["London"],
    DDL: "Rolling Basis",
    JobKeyWord: ["Research", "Intern", "Internship"],
    StartTime: "2024-6",
    Length: "Competitive",
    ApplyLink: new URL("https://boards.greenhouse.io/krollbondratingagency/jobs/7228955002"),
    Description:
      "岗位专业性较强，需要在简历强调阅读财报能力，数据分析能力和ESG研究能力. 申请时不需要上传求职信，但是推荐撰写一篇来阐述财报分析能力，金融/金数硕士的同学可以撰写对信用评级的研究见解，还要记得重点描写自己对integrity/transparency等核心价值观的共鸣",
  },
  {
    Company: "Urban Foresight",
    Position: "Consulting Graduate",
    Type: "Full-time",
    Location: ["Dundee, Scotland"],
    DDL: "2024-3-11",
    JobKeyWord: ["Consulting", "Graduate", "Full-time"],
    StartTime: "2024-9",
    Length: "Paid",
    Description:
      "现在London等大城市的咨询岗位都很卷，所以小镇的岗位容易被忽略，竞争也没有那么大，如果想要留英又想做一个可以提升自己的工作，这个公司是一个很不错的选择. 公司位于邓迪，需要好好权衡能不能适应当地环境。邓迪以前的造船业很发达，有2-3家中餐. 公司开放的岗位很广泛，从Net-Zero Consulting，到Business Operations Consulting，之后都可以转到更大的平台. 公司是mission-driven，需要在Cover Letter里面强调价值观的重合，突出自己以前的实习对社会创造的价值. 强烈建议阅读公司之前做过的projects!比如在LondonSouthwark的智慧城市项目，比如在emerging markets经济项目",
  },
  {
    Company: "Equitix",
    Position: "Summer Intern",
    Type: "Internship",
    Location: ["London"],
    DDL: "Rolling Basis",
    JobKeyWord: ["Summer", "Intern", "Internship"],
    StartTime: "2024-7-1",
    Length: "Competitive",
    ApplyLink: new URL("https://www.linkedin.com/jobs/view/3829970695/"),
    Description:
      "虽然招9个实习生，并有转正机会，但是Equitix为私募买房，岗位竞争异常激烈，有投行，咨询等硬核实习和技能会更有竞争力. 重点关注Equitix作为基建投资者的的社会责任，ESG的贡献，并且在简历中强调匹配度",
  },
  {
    Company: "TP ICAP",
    Position: "Global Broking Summer Internship",
    Type: "Internship",
    Location: ["London"],
    DDL: "Rolling Basis",
    JobKeyWord: ["Global", "Broking", "Summer", "Internship"],
    Description:
      "熟悉掌握公司的Broking业务以及Business Model，了解公司的战略目标，如科技方面的Fusion平台, 如公司Broking业务主要做Rates和FX. TP ICAP为London证交所上市公司，可以利用投资者报告等公开信息熟悉公司. 简历有交易，或自己平时交易，以及有和金融相关的经历都会加分. Broking比较考验口语以及社交能力，简历可把过去岗位title改成investor relationship management等client-facing的职业title",
  },
  {
    Company: "China Mobile(中国移动)",
    Position: "Graduate Program",
    Type: "Full-time",
    Location: ["London"],
    DDL: "Rolling Basis",
    JobKeyWord: ["Graduate", "Program", "Full-time"],
    StartTime: "2024-9",
    ApplyLink: new URL("https://careers.cmi.chinamobile.com/#/recruitIndex?channel=school&location=overseaSch&channelId=1001S31000000003JDNY&publishId=1001S3100000000QVU5N&isApplicant=true"),
  }
];

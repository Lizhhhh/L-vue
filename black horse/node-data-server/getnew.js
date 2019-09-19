const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/getnew/:id', (req, res) => {
    let temp = {
        status: 0,
        message: {
            id: req.params,
            title: `第${req.params.id}个栗子`,
            click: 2,
            add_time: new Date(),
            content: `<div class="pictext" style="text-align: left; text-indent: 2em;">资料图：2017年7月30日，庆祝中国人民解放军建军90周年阅兵在位于内蒙古的朱日和训练基地举行。 <a target='_blank' href='http://www.chinanews.com/'>中新社</a>记者 崔楠 摄</div>

            <p>　　中共十八届三中全会通过的《中共中央关于全面深化改革若干重大问题的决定》，把国防和军队改革纳入国家改革全局，作为一个重要部分进行部署。将国防和军队改革作为单独一部分写进全会决定，这在全会历史上是第一次。2015年11月24日，习近平在中央军委改革工作会议上，宣布全面实施改革强军战略，中国军队新一轮改革由此开启。分析认为，这次空前的军队改革，着眼顺应世界百年未有之大变局、应对国家安全面临的各种风险挑战、全面建成世界一流军队的战略需要，坚持积极防御的战略思想。</p>

            <p>　　正如习近平指出的，“要把备战与止战、威慑与实战、战争行动与和平时期军事力量运用作为一个整体加以运筹，为国家和平发展营造有利战略态势。”</p>

            <p>　　在中国文化中，自古崇尚“止戈为武”“不战而屈人之兵”，而积极防御正是禀承了中国传统文化的精髓，也诠释了战与和的辩证法。</p>

            <div style="text-align:center"><img alt="资料图： 2013年6月13日，中国“和平方舟”医院船在南海海域举行宣誓签名仪式，准备迎接“10 8”东盟防长扩大会人道主义援助救灾联合实兵演练任务。<a target='_blank' href='http://www.chinanews.com/'>中新社</a>发 琚振华 摄" src="http://i2.chinanews.com/simg/cmshd/2019/08/01/6803bb0ba3a8420083c0bfabdb9b70a8.jpg" style="border:px solid #000000" title="资料图： 2013年6月13日，中国“和平方舟”医院船在南海海域举行宣誓签名仪式，准备迎接“10 8”东盟防长扩大会人道主义援助救灾联合实兵演练任务。<a target='_blank' href='http://www.chinanews.com/'>中新社</a>发 琚振华 摄" /></div>

            <div class="pictext" style="text-align: left; text-indent: 2em;">资料图： 2013年6月13日，中国“和平方舟”医院船在南海海域举行宣誓签名仪式，准备迎接“10+8”东盟防长扩大会人道主义援助救灾联合实兵演练任务。<a target='_blank' href='http://www.chinanews.com/'>中新社</a>发 琚振华 摄</div>

            <p>　　<strong>践行“和”道化解信任赤字</strong></p>

            <p>　　一直以来，中国的军费话题为外界高度关注。最新发布的国防白皮书从多维度介绍了中国国防费的详细情况，表明中国用不断增加军事透明度化解信任赤字的积极姿态。</p>

            <p>　　中共十八大以来，媒体报道中开始出现了军队具体番号，在军事信息公开上前进一大步。随后，军队更进一步拥抱互联网，开放军营，军营直播……军队的开放力度和透明度日益增大。与此同时，中国军队积极参加国际维和、海上护航、人道主义救援等行动。截至2018年12月，中国军队已累计参加24项联合国维和行动，派出维和军事人员3.9万余人次，在维和任务区新建、修复道路1.3万余千米，运送物资135万余吨，接诊病人17万余人次……</p>

            <p style="text-align: center;"><img alt="资料图：第二十二批护航编队与第二十三批护航编队分航。 <a target='_blank' href='http://www.chinanews.com/'>中新社</a>记者 张海龙 摄" src="http://i2.chinanews.com/simg/cmshd/2019/08/01/1735f93b3b9b404ca5eeebc2a8add132.jpg" style="border:px solid #000000" title="资料图：第二十二批护航编队与第二十三批护航编队分航。 <a target='_blank' href='http://www.chinanews.com/'>中新社</a>记者 张海龙 摄" /></p>

            <div class="pictext" style="text-align: left; text-indent: 2em;">资料图：第二十二批护航编队与第二十三批护航编队分航。 <a target='_blank' href='http://www.chinanews.com/'>中新社</a>记者 张海龙 摄</div>

            <p>　　今年恰逢新中国成立70周年，中国海军、空军建军70周年等一系列重大节点，中国军事上的重大活动和举措备受外界瞩目。值得注意的是，中国将这些常被视为“秀肌肉”的活动，变成了会友的平台。4月份为庆祝中国海军建军70周年而举办的海上阅兵和多国海军活动，邀集了众多国家海军参加展演，包括与中国尚存海上岛礁争议的国家。习近平在会见多国海军活动外方代表团团长讲话时说，海纳百川、有容乃大。国家间要有事多商量、有事好商量，不能动辄就诉诸武力或以武力相威胁。各国应坚持平等协商，完善危机沟通机制，加强区域安全合作，推动涉海分歧妥善解决。观察认为，这道出了中国借庆祝海军生日为“和平、合作”搭台的深意。</p>

            <p>　　接下来，中国将首次承办世界军人运动会，这个全球军人最高规格的大型综合性运动会，又将成为中国以“武”尚“和”的重要舞台，也将是外界对习近平践行“和”道的观察窗口。(完)</p><div id="function_code_page"></div>

                  </div>
                  <!--正文start-->
                  <!--编辑姓名start-->

                   <div class="left_name" style="width:600px; margin:0 auto">
                     <div  class="biaoqian"><p></p></div>
            <!--编辑姓名-->
                  <div class="left_name"> 【编辑:刘湃】 </div>

            <!--编辑姓名-->
            </div>`
        }
    }
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(temp);
})

app.listen(8888, () => { console.log('running at http:127.0.0.1:8888') })
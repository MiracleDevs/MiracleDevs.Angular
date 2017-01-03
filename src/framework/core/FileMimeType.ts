module MiracleDevs.Angular.Core
{
    export class FileMimeType
    {
        private extensions: Dictionary<string, string>;

        public constructor()
        {
            this.extensions = new Dictionary<string, string>();

            this.extensions.add(".ez", "application/andrew-inset");
            this.extensions.add(".aw", "application/applixware");
            this.extensions.add(".atom", "application/atom+xml");
            this.extensions.add(".atomcat", "application/atomcat+xml");
            this.extensions.add(".atomsvc", "application/atomsvc+xml");
            this.extensions.add(".ccxml", "application/ccxml+xml");
            this.extensions.add(".cu", "application/cu-seeme");
            this.extensions.add(".davmount", "application/davmount+xml");
            this.extensions.add(".ecma", "application/ecmascript");
            this.extensions.add(".emma", "application/emma+xml");
            this.extensions.add(".epub", "application/epub+zip");
            this.extensions.add(".pfr", "application/font-tdpfr");
            this.extensions.add(".stk", "application/hyperstudio");
            this.extensions.add(".jar", "application/java-archive");
            this.extensions.add(".ser", "application/java-serialized-object");
            this.extensions.add(".class", "application/java-vm");
            this.extensions.add(".js", "application/javascript");
            this.extensions.add(".json", "application/json");
            this.extensions.add(".lostxml", "application/lost+xml");
            this.extensions.add(".hqx", "application/mac-binhex40");
            this.extensions.add(".cpt", "application/mac-compactpro");
            this.extensions.add(".mrc", "application/marc");
            this.extensions.add(".ma", "application/mathematica");
            this.extensions.add(".nb", "application/mathematica");
            this.extensions.add(".mb", "application/mathematica");
            this.extensions.add(".mathml", "application/mathml+xml");
            this.extensions.add(".mbox", "application/mbox");
            this.extensions.add(".mscml", "application/mediaservercontrol+xml");
            this.extensions.add(".mp4s", "application/mp4");
            this.extensions.add(".doc", "application/msword");
            this.extensions.add(".dot", "application/msword");
            this.extensions.add(".mxf", "application/mxf");
            this.extensions.add(".oda", "application/oda");
            this.extensions.add(".opf", "application/oebps-package+xml");
            this.extensions.add(".ogx", "application/ogg");

            this.extensions.add(".onetoc", "application/onenote");
            this.extensions.add(".onetoc2", "application/onenote");
            this.extensions.add(".onetmp", "application/onenote");
            this.extensions.add(".onepkg", "application/onenote");

            this.extensions.add(".xer", "application/patch-ops-error+xml");
            this.extensions.add(".pdf", "application/pdf");
            this.extensions.add(".pgp", "application/pgp-encrypted");

            this.extensions.add(".asc", "application/pgp-signature");
            this.extensions.add(".sig", "application/pgp-signature");

            this.extensions.add(".prf", "application/pics-rules");
            this.extensions.add(".p10", "application/pkcs10");

            this.extensions.add(".p7m", "application/pkcs7-mime");
            this.extensions.add(".p7c", "application/pkcs7-mime");

            this.extensions.add(".p7s", "application/pkcs7-signature");
            this.extensions.add(".cer", "application/pkix-cert");
            this.extensions.add(".crl", "application/pkix-crl");
            this.extensions.add(".pkipath", "application/pkix-pkipath");
            this.extensions.add(".pki", "application/pkixcmp");
            this.extensions.add(".pls", "application/pls+xml");

            this.extensions.add(".ai", "application/postscript");
            this.extensions.add(".eps", "application/postscript");
            this.extensions.add(".ps", "application/postscript");

            this.extensions.add(".cww", "application/prs.cww");
            this.extensions.add(".rdf", "application/rdf+xml");
            this.extensions.add(".rif", "application/reginfo+xml");
            this.extensions.add(".rnc", "application/relax-ng-compact-syntax");
            this.extensions.add(".rl", "application/resource-lists+xml");
            this.extensions.add(".rld", "application/resource-lists-diff+xml");
            this.extensions.add(".rs", "application/rls-services+xml");
            this.extensions.add(".rsd", "application/rsd+xml");
            this.extensions.add(".rss", "application/rss+xml");
            this.extensions.add(".rtf", "application/rtf");
            this.extensions.add(".sbml", "application/sbml+xml");
            this.extensions.add(".scq", "application/scvp-cv-request");
            this.extensions.add(".scs", "application/scvp-cv-response");
            this.extensions.add(".spq", "application/scvp-vp-request");
            this.extensions.add(".spp", "application/scvp-vp-response");
            this.extensions.add(".sdp", "application/sdp");
            this.extensions.add(".setpay", "application/set-payment-initiation");
            this.extensions.add(".setreg", "application/set-registration-initiation");
            this.extensions.add(".shf", "application/shf+xml");

            this.extensions.add(".smi", "application/smil+xml");
            this.extensions.add(".smil", "application/smil+xml");

            this.extensions.add(".rq", "application/sparql-query");
            this.extensions.add(".srx", "application/sparql-results+xml");
            this.extensions.add(".gram", "application/srgs");
            this.extensions.add(".grxml", "application/srgs+xml");
            this.extensions.add(".ssml", "application/ssml+xml");
            this.extensions.add(".plb", "application/vnd.3gpp.pic-bw-large");
            this.extensions.add(".psb", "application/vnd.3gpp.pic-bw-small");
            this.extensions.add(".pvb", "application/vnd.3gpp.pic-bw-var");
            this.extensions.add(".tcap", "application/vnd.3gpp2.tcap");
            this.extensions.add(".pwn", "application/vnd.3m.post-it-notes");
            this.extensions.add(".aso", "application/vnd.accpac.simply.aso");
            this.extensions.add(".imp", "application/vnd.accpac.simply.imp");
            this.extensions.add(".acu", "application/vnd.acucobol");

            this.extensions.add(".atc", "application/vnd.acucorp");
            this.extensions.add(".acutc", "application/vnd.acucorp");

            this.extensions.add(".air", "application/vnd.adobe.air-application-installer-package+zip");
            this.extensions.add(".xdp", "application/vnd.adobe.xdp+xml");
            this.extensions.add(".xfdf", "application/vnd.adobe.xfdf");
            this.extensions.add(".azf", "application/vnd.airzip.filesecure.azf");
            this.extensions.add(".azs", "application/vnd.airzip.filesecure.azs");
            this.extensions.add(".azw", "application/vnd.amazon.ebook");
            this.extensions.add(".acc", "application/vnd.americandynamics.acc");
            this.extensions.add(".ami", "application/vnd.amiga.ami");
            this.extensions.add(".apk", "application/vnd.android.package-archive");
            this.extensions.add(".cii", "application/vnd.anser-web-certificate-issue-initiation");
            this.extensions.add(".fti", "application/vnd.anser-web-funds-transfer-initiation");
            this.extensions.add(".atx", "application/vnd.antix.game-component");
            this.extensions.add(".mpkg", "application/vnd.apple.installer+xml");
            this.extensions.add(".swi", "application/vnd.arastra.swi");
            this.extensions.add(".aep", "application/vnd.audiograph");
            this.extensions.add(".mpm", "application/vnd.blueice.multipass");
            this.extensions.add(".bmi", "application/vnd.bmi");
            this.extensions.add(".rep", "application/vnd.businessobjects");
            this.extensions.add(".cdxml", "application/vnd.chemdraw+xml");
            this.extensions.add(".mmd", "application/vnd.chipnuts.karaoke-mmd");
            this.extensions.add(".cdy", "application/vnd.cinderella");
            this.extensions.add(".cla", "application/vnd.claymore");

            this.extensions.add(".c4g", "application/vnd.clonk.c4group");
            this.extensions.add(".c4d", "application/vnd.clonk.c4group");
            this.extensions.add(".c4f", "application/vnd.clonk.c4group");
            this.extensions.add(".c4p", "application/vnd.clonk.c4group");
            this.extensions.add(".c4u", "application/vnd.clonk.c4group");

            this.extensions.add(".csp", "application/vnd.commonspace");
            this.extensions.add(".cdbcmsg", "application/vnd.contact.cmsg");
            this.extensions.add(".cmc", "application/vnd.cosmocaller");
            this.extensions.add(".clkx", "application/vnd.crick.clicker");
            this.extensions.add(".clkk", "application/vnd.crick.clicker.keyboard");
            this.extensions.add(".clkp", "application/vnd.crick.clicker.palette");
            this.extensions.add(".clkt", "application/vnd.crick.clicker.template");
            this.extensions.add(".clkw", "application/vnd.crick.clicker.wordbank");
            this.extensions.add(".wbs", "application/vnd.criticaltools.wbs+xml");
            this.extensions.add(".pml", "application/vnd.ctc-posml");
            this.extensions.add(".ppd", "application/vnd.cups-ppd");
            this.extensions.add(".car", "application/vnd.curl.car");
            this.extensions.add(".pcurl", "application/vnd.curl.pcurl");
            this.extensions.add(".rdz", "application/vnd.data-vision.rdz");
            this.extensions.add(".fe_launch", "application/vnd.denovo.fcselayout-link");
            this.extensions.add(".dna", "application/vnd.dna");
            this.extensions.add(".mlp", "application/vnd.dolby.mlp");
            this.extensions.add(".dpg", "application/vnd.dpgraph");
            this.extensions.add(".dfac", "application/vnd.dreamfactory");
            this.extensions.add(".geo", "application/vnd.dynageo");
            this.extensions.add(".mag", "application/vnd.ecowin.chart");
            this.extensions.add(".nml", "application/vnd.enliven");
            this.extensions.add(".esf", "application/vnd.epson.esf");
            this.extensions.add(".msf", "application/vnd.epson.msf");
            this.extensions.add(".qam", "application/vnd.epson.quickanime");
            this.extensions.add(".slt", "application/vnd.epson.salt");
            this.extensions.add(".ssf", "application/vnd.epson.ssf");

            this.extensions.add(".es3", "application/vnd.eszigno3+xml");
            this.extensions.add(".et3", "application/vnd.eszigno3+xml");

            this.extensions.add(".ez2", "application/vnd.ezpix-album");
            this.extensions.add(".ez3", "application/vnd.ezpix-package");
            this.extensions.add(".fdf", "application/vnd.fdf");
            this.extensions.add(".mseed", "application/vnd.fdsn.mseed");

            this.extensions.add(".seed", "application/vnd.fdsn.seed");
            this.extensions.add(".dataless", "application/vnd.fdsn.seed");

            this.extensions.add(".gph", "application/vnd.flographit");
            this.extensions.add(".ftc", "application/vnd.fluxtime.clip");

            this.extensions.add(".fm", "application/vnd.framemaker");
            this.extensions.add(".frame", "application/vnd.framemaker");
            this.extensions.add(".maker", "application/vnd.framemaker");
            this.extensions.add(".book", "application/vnd.framemaker");

            this.extensions.add(".fnc", "application/vnd.frogans.fnc");
            this.extensions.add(".ltf", "application/vnd.frogans.ltf");
            this.extensions.add(".fsc", "application/vnd.fsc.weblaunch");
            this.extensions.add(".oas", "application/vnd.fujitsu.oasys");
            this.extensions.add(".oa2", "application/vnd.fujitsu.oasys2");
            this.extensions.add(".oa3", "application/vnd.fujitsu.oasys3");
            this.extensions.add(".fg5", "application/vnd.fujitsu.oasysgp");
            this.extensions.add(".bh2", "application/vnd.fujitsu.oasysprs");
            this.extensions.add(".ddd", "application/vnd.fujixerox.ddd");
            this.extensions.add(".xdw", "application/vnd.fujixerox.docuworks");
            this.extensions.add(".xbd", "application/vnd.fujixerox.docuworks.binder");
            this.extensions.add(".fzs", "application/vnd.fuzzysheet");
            this.extensions.add(".txd", "application/vnd.genomatix.tuxedo");
            this.extensions.add(".ggb", "application/vnd.geogebra.file");
            this.extensions.add(".ggt", "application/vnd.geogebra.tool");

            this.extensions.add(".gex", "application/vnd.geometry-explorer");
            this.extensions.add(".gre", "application/vnd.geometry-explorer");

            this.extensions.add(".gmx", "application/vnd.gmx");
            this.extensions.add(".kml", "application/vnd.google-earth.kml+xml");
            this.extensions.add(".kmz", "application/vnd.google-earth.kmz");

            this.extensions.add(".gqf", "application/vnd.grafeq");
            this.extensions.add(".gqs", "application/vnd.grafeq");

            this.extensions.add(".gac", "application/vnd.groove-account");
            this.extensions.add(".ghf", "application/vnd.groove-help");
            this.extensions.add(".gim", "application/vnd.groove-identity-message");
            this.extensions.add(".grv", "application/vnd.groove-injector");
            this.extensions.add(".gtm", "application/vnd.groove-tool-message");
            this.extensions.add(".tpl", "application/vnd.groove-tool-template");
            this.extensions.add(".vcg", "application/vnd.groove-vcard");
            this.extensions.add(".zmm", "application/vnd.handheld-entertainment+xml");
            this.extensions.add(".hbci", "application/vnd.hbci");
            this.extensions.add(".les", "application/vnd.hhe.lesson-player");
            this.extensions.add(".hpgl", "application/vnd.hp-hpgl");
            this.extensions.add(".hpid", "application/vnd.hp-hpid");
            this.extensions.add(".hps", "application/vnd.hp-hps");
            this.extensions.add(".jlt", "application/vnd.hp-jlyt");
            this.extensions.add(".pcl", "application/vnd.hp-pcl");
            this.extensions.add(".pclxl", "application/vnd.hp-pclxl");
            this.extensions.add(".sfd-hdstx", "application/vnd.hydrostatix.sof-data");
            this.extensions.add(".x3d", "application/vnd.hzn-3d-crossword");
            this.extensions.add(".mpy", "application/vnd.ibm.minipay");

            this.extensions.add(".afp", "application/vnd.ibm.modcap");
            this.extensions.add(".listafp", "application/vnd.ibm.modcap");
            this.extensions.add(".list3820", "application/vnd.ibm.modcap");

            this.extensions.add(".irm", "application/vnd.ibm.rights-management");
            this.extensions.add(".sc", "application/vnd.ibm.secure-container");

            this.extensions.add(".icc", "application/vnd.iccprofile");
            this.extensions.add(".icm", "application/vnd.iccprofile");

            this.extensions.add(".igl", "application/vnd.igloader");
            this.extensions.add(".ivp", "application/vnd.immervision-ivp");
            this.extensions.add(".ivu", "application/vnd.immervision-ivu");

            this.extensions.add(".xpw", "application/vnd.intercon.formnet");
            this.extensions.add(".xpx", "application/vnd.intercon.formnet");

            this.extensions.add(".qbo", "application/vnd.intu.qbo");
            this.extensions.add(".qfx", "application/vnd.intu.qfx");
            this.extensions.add(".rcprofile", "application/vnd.ipunplugged.rcprofile");
            this.extensions.add(".irp", "application/vnd.irepository.package+xml");
            this.extensions.add(".xpr", "application/vnd.is-xpr");
            this.extensions.add(".jam", "application/vnd.jam");
            this.extensions.add(".rms", "application/vnd.jcp.javame.midlet-rms");
            this.extensions.add(".jisp", "application/vnd.jisp");
            this.extensions.add(".joda", "application/vnd.joost.joda-archive");

            this.extensions.add(".ktz", "application/vnd.kahootz");
            this.extensions.add(".ktr", "application/vnd.kahootz");

            this.extensions.add(".karbon", "application/vnd.kde.karbon");
            this.extensions.add(".chrt", "application/vnd.kde.kchart");
            this.extensions.add(".kfo", "application/vnd.kde.kformula");
            this.extensions.add(".flw", "application/vnd.kde.kivio");
            this.extensions.add(".kon", "application/vnd.kde.kontour");
            this.extensions.add(".kpr,.kpt", "application/vnd.kde.kpresenter");
            this.extensions.add(".ksp", "application/vnd.kde.kspread");
            this.extensions.add(".kwd,.kwt", "application/vnd.kde.kword");
            this.extensions.add(".htke", "application/vnd.kenameaapp");
            this.extensions.add(".kia", "application/vnd.kidspiration");

            this.extensions.add(".kne", "application/vnd.kinar");
            this.extensions.add(".knp", "application/vnd.kinar");

            this.extensions.add(".skp", "application/vnd.koan");
            this.extensions.add(".skd", "application/vnd.koan");
            this.extensions.add(".skt", "application/vnd.koan");
            this.extensions.add(".skm", "application/vnd.koan");

            this.extensions.add(".sse", "application/vnd.kodak-descriptor");
            this.extensions.add(".lbd", "application/vnd.llamagraphics.life-balance.desktop");
            this.extensions.add(".lbe", "application/vnd.llamagraphics.life-balance.exchange+xml");
            this.extensions.add(".123", "application/vnd.lotus-1-2-3");
            this.extensions.add(".apr", "application/vnd.lotus-approach");
            this.extensions.add(".pre", "application/vnd.lotus-freelance");
            this.extensions.add(".nsf", "application/vnd.lotus-notes");
            this.extensions.add(".org", "application/vnd.lotus-organizer");
            this.extensions.add(".scm", "application/vnd.lotus-screencam");
            this.extensions.add(".lwp", "application/vnd.lotus-wordpro");
            this.extensions.add(".portpkg", "application/vnd.macports.portpkg");
            this.extensions.add(".mcd", "application/vnd.mcd");
            this.extensions.add(".mc1", "application/vnd.medcalcdata");
            this.extensions.add(".cdkey", "application/vnd.mediastation.cdkey");
            this.extensions.add(".mwf", "application/vnd.mfer");
            this.extensions.add(".mfm", "application/vnd.mfmp");
            this.extensions.add(".flo", "application/vnd.micrografx.flo");
            this.extensions.add(".igx", "application/vnd.micrografx.igx");
            this.extensions.add(".mif", "application/vnd.mif");
            this.extensions.add(".daf", "application/vnd.mobius.daf");
            this.extensions.add(".dis", "application/vnd.mobius.dis");
            this.extensions.add(".mbk", "application/vnd.mobius.mbk");
            this.extensions.add(".mqy", "application/vnd.mobius.mqy");
            this.extensions.add(".msl", "application/vnd.mobius.msl");
            this.extensions.add(".plc", "application/vnd.mobius.plc");
            this.extensions.add(".txf", "application/vnd.mobius.txf");
            this.extensions.add(".mpn", "application/vnd.mophun.application");
            this.extensions.add(".mpc", "application/vnd.mophun.certificate");
            this.extensions.add(".xul", "application/vnd.mozilla.xul+xml");
            this.extensions.add(".cil", "application/vnd.ms-artgalry");
            this.extensions.add(".cab", "application/vnd.ms-cab-compressed");

            this.extensions.add(".xls", "application/vnd.ms-excel");
            this.extensions.add(".xlm", "application/vnd.ms-excel");
            this.extensions.add(".xla", "application/vnd.ms-excel");
            this.extensions.add(".xlc", "application/vnd.ms-excel");
            this.extensions.add(".xlt", "application/vnd.ms-excel");
            this.extensions.add(".xlw", "application/vnd.ms-excel");

            this.extensions.add(".xlam", "application/vnd.ms-excel.addin.macroenabled.12");
            this.extensions.add(".xlsb", "application/vnd.ms-excel.sheet.binary.macroenabled.12");
            this.extensions.add(".xlsm", "application/vnd.ms-excel.sheet.macroenabled.12");
            this.extensions.add(".xltm", "application/vnd.ms-excel.template.macroenabled.12");
            this.extensions.add(".eot", "application/vnd.ms-fontobject");
            this.extensions.add(".chm", "application/vnd.ms-htmlhelp");
            this.extensions.add(".ims", "application/vnd.ms-ims");
            this.extensions.add(".lrm", "application/vnd.ms-lrm");
            this.extensions.add(".cat", "application/vnd.ms-pki.seccat");
            this.extensions.add(".stl", "application/vnd.ms-pki.stl");

            this.extensions.add(".ppt", "application/vnd.ms-powerpoint");
            this.extensions.add(".pps", "application/vnd.ms-powerpoint");
            this.extensions.add(".pot", "application/vnd.ms-powerpoint");

            this.extensions.add(".ppam", "application/vnd.ms-powerpoint.addin.macroenabled.12");
            this.extensions.add(".pptm", "application/vnd.ms-powerpoint.presentation.macroenabled.12");
            this.extensions.add(".sldm", "application/vnd.ms-powerpoint.slide.macroenabled.12");
            this.extensions.add(".ppsm", "application/vnd.ms-powerpoint.slideshow.macroenabled.12");
            this.extensions.add(".potm", "application/vnd.ms-powerpoint.template.macroenabled.12");

            this.extensions.add(".mpp", "application/vnd.ms-project");
            this.extensions.add(".mpt", "application/vnd.ms-project");

            this.extensions.add(".docm", "application/vnd.ms-word.document.macroenabled.12");
            this.extensions.add(".dotm", "application/vnd.ms-word.template.macroenabled.12");

            this.extensions.add(".wps", "application/vnd.ms-works");
            this.extensions.add(".wks", "application/vnd.ms-works");
            this.extensions.add(".wcm", "application/vnd.ms-works");
            this.extensions.add(".wdb", "application/vnd.ms-works");

            this.extensions.add(".wpl", "application/vnd.ms-wpl");
            this.extensions.add(".xps", "application/vnd.ms-xpsdocument");
            this.extensions.add(".mseq", "application/vnd.mseq");
            this.extensions.add(".mus", "application/vnd.musician");
            this.extensions.add(".msty", "application/vnd.muvee.style");
            this.extensions.add(".nlu", "application/vnd.neurolanguage.nlu");
            this.extensions.add(".nnd", "application/vnd.noblenet-directory");
            this.extensions.add(".nns", "application/vnd.noblenet-sealer");
            this.extensions.add(".nnw", "application/vnd.noblenet-web");
            this.extensions.add(".ngdat", "application/vnd.nokia.n-gage.data");
            this.extensions.add(".n-gage", "application/vnd.nokia.n-gage.symbian.install");
            this.extensions.add(".rpst", "application/vnd.nokia.radio-preset");
            this.extensions.add(".rpss", "application/vnd.nokia.radio-presets");
            this.extensions.add(".edm", "application/vnd.novadigm.edm");
            this.extensions.add(".edx", "application/vnd.novadigm.edx");
            this.extensions.add(".ext", "application/vnd.novadigm.ext");
            this.extensions.add(".odc", "application/vnd.oasis.opendocument.chart");
            this.extensions.add(".otc", "application/vnd.oasis.opendocument.chart-template");
            this.extensions.add(".odb", "application/vnd.oasis.opendocument.database");
            this.extensions.add(".odf", "application/vnd.oasis.opendocument.formula");
            this.extensions.add(".odft", "application/vnd.oasis.opendocument.formula-template");
            this.extensions.add(".odg", "application/vnd.oasis.opendocument.graphics");
            this.extensions.add(".otg", "application/vnd.oasis.opendocument.graphics-template");
            this.extensions.add(".odi", "application/vnd.oasis.opendocument.image");
            this.extensions.add(".oti", "application/vnd.oasis.opendocument.image-template");
            this.extensions.add(".odp", "application/vnd.oasis.opendocument.presentation");
            this.extensions.add(".ods", "application/vnd.oasis.opendocument.spreadsheet");
            this.extensions.add(".ots", "application/vnd.oasis.opendocument.spreadsheet-template");
            this.extensions.add(".odt", "application/vnd.oasis.opendocument.text");
            this.extensions.add(".otm", "application/vnd.oasis.opendocument.text-master");
            this.extensions.add(".ott", "application/vnd.oasis.opendocument.text-template");
            this.extensions.add(".oth", "application/vnd.oasis.opendocument.text-web");
            this.extensions.add(".xo", "application/vnd.olpc-sugar");
            this.extensions.add(".dd2", "application/vnd.oma.dd2+xml");
            this.extensions.add(".oxt", "application/vnd.openofficeorg.extension");
            this.extensions.add(".pptx", "application/vnd.openxmlformats-officedocument.presentationml.presentation");
            this.extensions.add(".sldx", "application/vnd.openxmlformats-officedocument.presentationml.slide");
            this.extensions.add(".ppsx", "application/vnd.openxmlformats-officedocument.presentationml.slideshow");
            this.extensions.add(".potx", "application/vnd.openxmlformats-officedocument.presentationml.template");
            this.extensions.add(".xlsx", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
            this.extensions.add(".xltx", "application/vnd.openxmlformats-officedocument.spreadsheetml.template");
            this.extensions.add(".docx", "application/vnd.openxmlformats-officedocument.wordprocessingml.document");
            this.extensions.add(".dotx", "application/vnd.openxmlformats-officedocument.wordprocessingml.template");
            this.extensions.add(".dp", "application/vnd.osgi.dp");

            this.extensions.add(".pdb", "application/vnd.palm");
            this.extensions.add(".pqa", "application/vnd.palm");
            this.extensions.add(".oprc", "application/vnd.palm");

            this.extensions.add(".str", "application/vnd.pg.format");
            this.extensions.add(".ei6", "application/vnd.pg.osasli");
            this.extensions.add(".efif", "application/vnd.picsel");
            this.extensions.add(".plf", "application/vnd.pocketlearn");
            this.extensions.add(".pbd", "application/vnd.powerbuilder6");
            this.extensions.add(".box", "application/vnd.previewsystems.box");
            this.extensions.add(".mgz", "application/vnd.proteus.magazine");
            this.extensions.add(".qps", "application/vnd.publishare-delta-tree");
            this.extensions.add(".ptid", "application/vnd.pvi.ptid1");
            
            this.extensions.add(".qxd", "application/vnd.quark.quarkxpress");
            this.extensions.add(".qxt", "application/vnd.quark.quarkxpress");
            this.extensions.add(".qwd", "application/vnd.quark.quarkxpress");
            this.extensions.add(".qwt", "application/vnd.quark.quarkxpress");
            this.extensions.add(".qxl", "application/vnd.quark.quarkxpress");
            this.extensions.add(".qxb", "application/vnd.quark.quarkxpress");

            this.extensions.add(".mxl", "application/vnd.recordare.musicxml");
            this.extensions.add(".musicxml", "application/vnd.recordare.musicxml+xml");
            this.extensions.add(".cod", "application/vnd.rim.cod");
            this.extensions.add(".rm", "application/vnd.rn-realmedia");
            this.extensions.add(".link66", "application/vnd.route66.link66+xml");
            this.extensions.add(".see", "application/vnd.seemail");
            this.extensions.add(".sema", "application/vnd.sema");
            this.extensions.add(".semd", "application/vnd.semd");
            this.extensions.add(".semf", "application/vnd.semf");
            this.extensions.add(".ifm", "application/vnd.shana.informed.formdata");
            this.extensions.add(".itp", "application/vnd.shana.informed.formtemplate");
            this.extensions.add(".iif", "application/vnd.shana.informed.interchange");
            this.extensions.add(".ipk", "application/vnd.shana.informed.package");

            this.extensions.add(".twd", "application/vnd.simtech-mindmapper");
            this.extensions.add(".twds", "application/vnd.simtech-mindmapper");

            this.extensions.add(".mmf", "application/vnd.smaf");
            this.extensions.add(".teacher", "application/vnd.smart.teacher");

            this.extensions.add(".sdkm", "application/vnd.solent.sdkm+xml");
            this.extensions.add(".sdkd", "application/vnd.solent.sdkm+xml");

            this.extensions.add(".dxp", "application/vnd.spotfire.dxp");
            this.extensions.add(".sfs", "application/vnd.spotfire.sfs");
            this.extensions.add(".sdc", "application/vnd.stardivision.calc");
            this.extensions.add(".sda", "application/vnd.stardivision.draw");
            this.extensions.add(".sdd", "application/vnd.stardivision.impress");
            this.extensions.add(".smf", "application/vnd.stardivision.math");
            this.extensions.add(".sdw", "application/vnd.stardivision.writer");
            this.extensions.add(".vor", "application/vnd.stardivision.writer");
            this.extensions.add(".sgl", "application/vnd.stardivision.writer-global");
            this.extensions.add(".sxc", "application/vnd.sun.xml.calc");
            this.extensions.add(".stc", "application/vnd.sun.xml.calc.template");
            this.extensions.add(".sxd", "application/vnd.sun.xml.draw");
            this.extensions.add(".std", "application/vnd.sun.xml.draw.template");
            this.extensions.add(".sxi", "application/vnd.sun.xml.impress");
            this.extensions.add(".sti", "application/vnd.sun.xml.impress.template");
            this.extensions.add(".sxm", "application/vnd.sun.xml.math");
            this.extensions.add(".sxw", "application/vnd.sun.xml.writer");
            this.extensions.add(".sxg", "application/vnd.sun.xml.writer.global");
            this.extensions.add(".stw", "application/vnd.sun.xml.writer.template");

            this.extensions.add(".sus", "application/vnd.sus-calendar");
            this.extensions.add(".susp", "application/vnd.sus-calendar");

            this.extensions.add(".svd", "application/vnd.svd");

            this.extensions.add(".sis", "application/vnd.symbian.install");
            this.extensions.add(".sisx", "application/vnd.symbian.install");

            this.extensions.add(".xsm", "application/vnd.syncml+xml");
            this.extensions.add(".bdm", "application/vnd.syncml.dm+wbxml");
            this.extensions.add(".xdm", "application/vnd.syncml.dm+xml");
            this.extensions.add(".tao", "application/vnd.tao.intent-module-archive");
            this.extensions.add(".tmo", "application/vnd.tmobile-livetv");
            this.extensions.add(".tpt", "application/vnd.trid.tpt");
            this.extensions.add(".mxs", "application/vnd.triscape.mxs");
            this.extensions.add(".tra", "application/vnd.trueapp");

            this.extensions.add(".ufd", "application/vnd.ufdl");
            this.extensions.add(".ufdl", "application/vnd.ufdl");

            this.extensions.add(".utz", "application/vnd.uiq.theme");
            this.extensions.add(".umj", "application/vnd.umajin");
            this.extensions.add(".unityweb", "application/vnd.unity");
            this.extensions.add(".uoml", "application/vnd.uoml+xml");
            this.extensions.add(".vcx", "application/vnd.vcx");
            this.extensions.add(".vsd,.vst,.vss,.vsw", "application/vnd.visio");
            this.extensions.add(".vis", "application/vnd.visionary");
            this.extensions.add(".vsf", "application/vnd.vsf");
            this.extensions.add(".wbxml", "application/vnd.wap.wbxml");
            this.extensions.add(".wmlc", "application/vnd.wap.wmlc");
            this.extensions.add(".wmlsc", "application/vnd.wap.wmlscriptc");
            this.extensions.add(".wtb", "application/vnd.webturbo");
            this.extensions.add(".wpd", "application/vnd.wordperfect");
            this.extensions.add(".wqd", "application/vnd.wqd");
            this.extensions.add(".stf", "application/vnd.wt.stf");
            this.extensions.add(".xar", "application/vnd.xara");
            this.extensions.add(".xfdl", "application/vnd.xfdl");
            this.extensions.add(".hvd", "application/vnd.yamaha.hv-dic");
            this.extensions.add(".hvs", "application/vnd.yamaha.hv-script");
            this.extensions.add(".hvp", "application/vnd.yamaha.hv-voice");
            this.extensions.add(".osf", "application/vnd.yamaha.openscoreformat");
            this.extensions.add(".osfpvg", "application/vnd.yamaha.openscoreformat.osfpvg+xml");
            this.extensions.add(".saf", "application/vnd.yamaha.smaf-audio");
            this.extensions.add(".spf", "application/vnd.yamaha.smaf-phrase");
            this.extensions.add(".cmp", "application/vnd.yellowriver-custom-menu");

            this.extensions.add(".zir", "application/vnd.zul");
            this.extensions.add(".zirz", "application/vnd.zul");

            this.extensions.add(".zaz", "application/vnd.zzazz.deck+xml");
            this.extensions.add(".vxml", "application/voicexml+xml");
            this.extensions.add(".hlp", "application/winhlp");
            this.extensions.add(".wsdl", "application/wsdl+xml");
            this.extensions.add(".wspolicy", "application/wspolicy+xml");
            this.extensions.add(".abw", "application/x-abiword");
            this.extensions.add(".ace", "application/x-ace-compressed");

            this.extensions.add(".aab", "application/x-authorware-bin");
            this.extensions.add(".x32", "application/x-authorware-bin");
            this.extensions.add(".u32", "application/x-authorware-bin");
            this.extensions.add(".vox", "application/x-authorware-bin");

            this.extensions.add(".aam", "application/x-authorware-map");
            this.extensions.add(".aas", "application/x-authorware-seg");
            this.extensions.add(".bcpio", "application/x-bcpio");
            this.extensions.add(".torrent", "application/x-bittorrent");
            this.extensions.add(".bz", "application/x-bzip");

            this.extensions.add(".bz2", "application/x-bzip2");
            this.extensions.add(".boz", "application/x-bzip2");

            this.extensions.add(".vcd", "application/x-cdlink");
            this.extensions.add(".chat", "application/x-chat");
            this.extensions.add(".pgn", "application/x-chess-pgn");
            this.extensions.add(".cpio", "application/x-cpio");
            this.extensions.add(".csh", "application/x-csh");

            this.extensions.add(".deb", "application/x-debian-package");
            this.extensions.add(".udeb", "application/x-debian-package");

            this.extensions.add(".dir", "application/x-director");
            this.extensions.add(".dcr", "application/x-director");
            this.extensions.add(".dxr", "application/x-director");
            this.extensions.add(".cst", "application/x-director");
            this.extensions.add(".cct", "application/x-director");
            this.extensions.add(".cxt", "application/x-director");
            this.extensions.add(".w3d", "application/x-director");
            this.extensions.add(".fgd", "application/x-director");
            this.extensions.add(".swa", "application/x-director");

            this.extensions.add(".wad", "application/x-doom");
            this.extensions.add(".ncx", "application/x-dtbncx+xml");
            this.extensions.add(".dtb", "application/x-dtbook+xml");
            this.extensions.add(".res", "application/x-dtbresource+xml");
            this.extensions.add(".dvi", "application/x-dvi");
            this.extensions.add(".bdf", "application/x-font-bdf");
            this.extensions.add(".gsf", "application/x-font-ghostscript");
            this.extensions.add(".psf", "application/x-font-linux-psf");
            this.extensions.add(".otf", "application/x-font-otf");
            this.extensions.add(".pcf", "application/x-font-pcf");
            this.extensions.add(".snf", "application/x-font-snf");

            this.extensions.add(".ttf", "application/x-font-ttf");
            this.extensions.add(".ttc", "application/x-font-ttf");

            this.extensions.add(".woff", "application/font-woff");

            this.extensions.add(".pfa", "application/x-font-type1");
            this.extensions.add(".pfb", "application/x-font-type1");
            this.extensions.add(".pfm", "application/x-font-type1");
            this.extensions.add(".afm", "application/x-font-type1");

            this.extensions.add(".spl", "application/x-futuresplash");
            this.extensions.add(".gnumeric", "application/x-gnumeric");
            this.extensions.add(".gtar", "application/x-gtar");
            this.extensions.add(".hdf", "application/x-hdf");
            this.extensions.add(".jnlp", "application/x-java-jnlp-file");
            this.extensions.add(".latex", "application/x-latex");

            this.extensions.add(".prc", "application/x-mobipocket-ebook");
            this.extensions.add(".mobi", "application/x-mobipocket-ebook");

            this.extensions.add(".application", "application/x-ms-application");
            this.extensions.add(".wmd", "application/x-ms-wmd");
            this.extensions.add(".wmz", "application/x-ms-wmz");
            this.extensions.add(".xbap", "application/x-ms-xbap");
            this.extensions.add(".mdb", "application/x-msaccess");
            this.extensions.add(".obd", "application/x-msbinder");
            this.extensions.add(".crd", "application/x-mscardfile");
            this.extensions.add(".clp", "application/x-msclip");

            this.extensions.add(".exe", "application/x-msdownload");
            this.extensions.add(".dll", "application/x-msdownload");
            this.extensions.add(".com", "application/x-msdownload");
            this.extensions.add(".bat", "application/x-msdownload");
            this.extensions.add(".msi", "application/x-msdownload");

            this.extensions.add(".mvb", "application/x-msmediaview");
            this.extensions.add(".m13", "application/x-msmediaview");
            this.extensions.add(".m14", "application/x-msmediaview");

            this.extensions.add(".wmf", "application/x-msmetafile");
            this.extensions.add(".mny", "application/x-msmoney");
            this.extensions.add(".pub", "application/x-mspublisher");
            this.extensions.add(".scd", "application/x-msschedule");
            this.extensions.add(".trm", "application/x-msterminal");
            this.extensions.add(".wri", "application/x-mswrite");

            this.extensions.add(".nc", "application/x-netcdf");
            this.extensions.add(".cdf", "application/x-netcdf");

            this.extensions.add(".p12", "application/x-pkcs12");
            this.extensions.add(".pfx", "application/x-pkcs12");

            this.extensions.add(".p7b", "application/x-pkcs7-certificates");
            this.extensions.add(".spc", "application/x-pkcs7-certificates");

            this.extensions.add(".p7r", "application/x-pkcs7-certreqresp");
            this.extensions.add(".rar", "application/x-rar-compressed");
            this.extensions.add(".sh", "application/x-sh");
            this.extensions.add(".shar", "application/x-shar");
            this.extensions.add(".swf", "application/x-shockwave-flash");
            this.extensions.add(".xap", "application/x-silverlight-app");
            this.extensions.add(".sit", "application/x-stuffit");
            this.extensions.add(".sitx", "application/x-stuffitx");
            this.extensions.add(".sv4cpio", "application/x-sv4cpio");
            this.extensions.add(".sv4crc", "application/x-sv4crc");
            this.extensions.add(".tar", "application/x-tar");
            this.extensions.add(".tcl", "application/x-tcl");
            this.extensions.add(".tex", "application/x-tex");
            this.extensions.add(".tfm", "application/x-tex-tfm");

            this.extensions.add(".texinfo", "application/x-texinfo");
            this.extensions.add(".texi", "application/x-texinfo");

            this.extensions.add(".ustar", "application/x-ustar");
            this.extensions.add(".src", "application/x-wais-source");

            this.extensions.add(".der", "application/x-x509-ca-cert");
            this.extensions.add(".crt", "application/x-x509-ca-cert");

            this.extensions.add(".fig", "application/x-xfig");
            this.extensions.add(".xpi", "application/x-xpinstall");
            this.extensions.add(".xenc", "application/xenc+xml");

            this.extensions.add(".xhtml", "application/xhtml+xml");
            this.extensions.add(".xht", "application/xhtml+xml");

            this.extensions.add(".xml", "application/xml");
            this.extensions.add(".xsl", "application/xml");

            this.extensions.add(".dtd", "application/xml-dtd");
            this.extensions.add(".xop", "application/xop+xml");
            this.extensions.add(".xslt", "application/xslt+xml");
            this.extensions.add(".xspf", "application/xspf+xml");

            this.extensions.add(".mxml", "application/xv+xml");
            this.extensions.add(".xhvml", "application/xv+xml");
            this.extensions.add(".xvml", "application/xv+xml");
            this.extensions.add(".xvm", "application/xv+xml");

            this.extensions.add(".zip", "application/zip");
            this.extensions.add(".adp", "audio/adpcm");

            this.extensions.add(".au", "audio/basic");
            this.extensions.add(".snd", "audio/basic");

            this.extensions.add(".mid", "audio/midi");
            this.extensions.add(".midi", "audio/midi");
            this.extensions.add(".kar", "audio/midi");
            this.extensions.add(".rmi", "audio/midi");

            this.extensions.add(".mp4a", "audio/mp4");

            this.extensions.add(".m4a", "audio/mp4a-latm");
            this.extensions.add(".m4p", "audio/mp4a-latm");

            this.extensions.add(".mpga", "audio/mpeg");
            this.extensions.add(".mp2", "audio/mpeg");
            this.extensions.add(".mp2a", "audio/mpeg");
            this.extensions.add(".mp3", "audio/mpeg");
            this.extensions.add(".m2a", "audio/mpeg");
            this.extensions.add(".m3a", "audio/mpeg");

            this.extensions.add(".oga", "audio/ogg");
            this.extensions.add(".ogg", "audio/ogg");
            this.extensions.add(".spx", "audio/ogg");

            this.extensions.add(".eol", "audio/vnd.digital-winds");
            this.extensions.add(".dts", "audio/vnd.dts");
            this.extensions.add(".dtshd", "audio/vnd.dts.hd");
            this.extensions.add(".lvp", "audio/vnd.lucent.voice");
            this.extensions.add(".pya", "audio/vnd.ms-playready.media.pya");
            this.extensions.add(".ecelp4800", "audio/vnd.nuera.ecelp4800");
            this.extensions.add(".ecelp7470", "audio/vnd.nuera.ecelp7470");
            this.extensions.add(".ecelp9600", "audio/vnd.nuera.ecelp9600");
            this.extensions.add(".aac", "audio/x-aac");

            this.extensions.add(".aif", "audio/x-aiff");
            this.extensions.add(".aiff", "audio/x-aiff");
            this.extensions.add(".aifc", "audio/x-aiff");

            this.extensions.add(".m3u", "audio/x-mpegurl");
            this.extensions.add(".wax", "audio/x-ms-wax");
            this.extensions.add(".wma", "audio/x-ms-wma");

            this.extensions.add(".ram", "audio/x-pn-realaudio");
            this.extensions.add(".ra", "audio/x-pn-realaudio");

            this.extensions.add(".rmp", "audio/x-pn-realaudio-plugin");
            this.extensions.add(".wav", "audio/x-wav");
            this.extensions.add(".cdx", "chemical/x-cdx");
            this.extensions.add(".cif", "chemical/x-cif");
            this.extensions.add(".cmdf", "chemical/x-cmdf");
            this.extensions.add(".cml", "chemical/x-cml");
            this.extensions.add(".csml", "chemical/x-csml");
            this.extensions.add(".xyz", "chemical/x-xyz");
            this.extensions.add(".bmp", "image/bmp");
            this.extensions.add(".cgm", "image/cgm");
            this.extensions.add(".g3", "image/g3fax");
            this.extensions.add(".gif", "image/gif");
            this.extensions.add(".ief", "image/ief");
            this.extensions.add(".jp2", "image/jp2");

            this.extensions.add(".jpeg", "image/jpeg");
            this.extensions.add(".jpg", "image/jpeg");
            this.extensions.add(".jpe", "image/jpeg");

            this.extensions.add(".pict", "image/pict");
            this.extensions.add(".pic", "image/pict");
            this.extensions.add(".pct", "image/pict");

            this.extensions.add(".png", "image/png");
            this.extensions.add(".btif", "image/prs.btif");

            this.extensions.add(".svg,", "image/svg+xml");
            this.extensions.add(".svgz", "image/svg+xml");

            this.extensions.add(".tiff", "image/tiff");
            this.extensions.add(".tif", "image/tiff");

            this.extensions.add(".psd", "image/vnd.adobe.photoshop");

            this.extensions.add(".djvu", "image/vnd.djvu");
            this.extensions.add(".djv", "image/vnd.djvu");

            this.extensions.add(".dwg", "image/vnd.dwg");
            this.extensions.add(".dxf", "image/vnd.dxf");
            this.extensions.add(".fbs", "image/vnd.fastbidsheet");
            this.extensions.add(".fpx", "image/vnd.fpx");
            this.extensions.add(".fst", "image/vnd.fst");
            this.extensions.add(".mmr", "image/vnd.fujixerox.edmics-mmr");
            this.extensions.add(".rlc", "image/vnd.fujixerox.edmics-rlc");
            this.extensions.add(".mdi", "image/vnd.ms-modi");
            this.extensions.add(".npx", "image/vnd.net-fpx");
            this.extensions.add(".wbmp", "image/vnd.wap.wbmp");
            this.extensions.add(".xif", "image/vnd.xiff");
            this.extensions.add(".ras", "image/x-cmu-raster");
            this.extensions.add(".cmx", "image/x-cmx");

            this.extensions.add(".fh", "image/x-freehand");
            this.extensions.add(".fhc", "image/x-freehand");
            this.extensions.add(".fh4", "image/x-freehand");
            this.extensions.add(".fh5", "image/x-freehand");
            this.extensions.add(".fh7", "image/x-freehand");

            this.extensions.add(".ico", "image/x-icon");

            this.extensions.add(".pntg", "image/x-macpaint");
            this.extensions.add(".pnt", "image/x-macpaint");
            this.extensions.add(".mac", "image/x-macpaint");

            this.extensions.add(".pcx", "image/x-pcx");
            this.extensions.add(".pnm", "image/x-portable-anymap");
            this.extensions.add(".pbm", "image/x-portable-bitmap");
            this.extensions.add(".pgm", "image/x-portable-graymap");
            this.extensions.add(".ppm", "image/x-portable-pixmap");

            this.extensions.add(".qtif", "image/x-quicktime");
            this.extensions.add(".qti", "image/x-quicktime");

            this.extensions.add(".rgb", "image/x-rgb");
            this.extensions.add(".xbm", "image/x-xbitmap");
            this.extensions.add(".xpm", "image/x-xpixmap");
            this.extensions.add(".xwd", "image/x-xwindowdump");

            this.extensions.add(".eml", "message/rfc822");
            this.extensions.add(".mime", "message/rfc822");

            this.extensions.add(".igs", "model/iges");
            this.extensions.add(".iges", "model/iges");

            this.extensions.add(".msh", "model/mesh");
            this.extensions.add(".mesh", "model/mesh");
            this.extensions.add(".silo", "model/mesh");

            this.extensions.add(".dwf", "model/vnd.dwf");
            this.extensions.add(".gdl", "model/vnd.gdl");
            this.extensions.add(".gtw", "model/vnd.gtw");
            this.extensions.add(".mts", "model/vnd.mts");
            this.extensions.add(".vtu", "model/vnd.vtu");

            this.extensions.add(".wrl", "model/vrml");
            this.extensions.add(".vrml", "model/vrml");

            this.extensions.add(".ics", "text/calendar");
            this.extensions.add(".ifb", "text/calendar");

            this.extensions.add(".css", "text/css");
            this.extensions.add(".csv", "text/csv");

            this.extensions.add(".html", "text/html");
            this.extensions.add(".htm", "text/html");

            this.extensions.add(".txt", "text/plain");
            this.extensions.add(".text", "text/plain");
            this.extensions.add(".conf", "text/plain");
            this.extensions.add(".def", "text/plain");
            this.extensions.add(".list", "text/plain");
            this.extensions.add(".log", "text/plain");
            this.extensions.add(".in", "text/plain");

            this.extensions.add(".dsc", "text/prs.lines.tag");
            this.extensions.add(".rtx", "text/richtext");

            this.extensions.add(".sgml", "text/sgml");
            this.extensions.add(".sgm", "text/sgml");

            this.extensions.add(".tsv", "text/tab-separated-values");

            this.extensions.add(".t", "text/troff");
            this.extensions.add(".tr", "text/troff");
            this.extensions.add(".roff", "text/troff");
            this.extensions.add(".man", "text/troff");
            this.extensions.add(".me", "text/troff");
            this.extensions.add(".ms", "text/troff");

            this.extensions.add(".uri", "text/uri-list");
            this.extensions.add(".uris", "text/uri-list");
            this.extensions.add(".urls", "text/uri-list");

            this.extensions.add(".curl", "text/vnd.curl");
            this.extensions.add(".dcurl", "text/vnd.curl.dcurl");
            this.extensions.add(".scurl", "text/vnd.curl.scurl");
            this.extensions.add(".mcurl", "text/vnd.curl.mcurl");
            this.extensions.add(".fly", "text/vnd.fly");
            this.extensions.add(".flx", "text/vnd.fmi.flexstor");
            this.extensions.add(".gv", "text/vnd.graphviz");
            this.extensions.add(".3dml", "text/vnd.in3d.3dml");
            this.extensions.add(".spot", "text/vnd.in3d.spot");
            this.extensions.add(".jad", "text/vnd.sun.j2me.app-descriptor");
            this.extensions.add(".wml", "text/vnd.wap.wml");
            this.extensions.add(".wmls", "text/vnd.wap.wmlscript");

            this.extensions.add(".s", "text/x-asm");
            this.extensions.add(".asm", "text/x-asm");

            this.extensions.add(".c", "text/x-c");
            this.extensions.add(".cc", "text/x-c");
            this.extensions.add(".cxx", "text/x-c");
            this.extensions.add(".cpp", "text/x-c");
            this.extensions.add(".h", "text/x-c");
            this.extensions.add(".hh", "text/x-c");
            this.extensions.add(".dic", "text/x-c");

            this.extensions.add(".f", "text/x-fortran");
            this.extensions.add(".for", "text/x-fortran");
            this.extensions.add(".f77", "text/x-fortran");
            this.extensions.add(".f90", "text/x-fortran");

            this.extensions.add(".p", "text/x-pascal");
            this.extensions.add(".pas", "text/x-pascal");

            this.extensions.add(".java", "text/x-java-source");
            this.extensions.add(".etx", "text/x-setext");
            this.extensions.add(".uu", "text/x-uuencode");
            this.extensions.add(".vcs", "text/x-vcalendar");
            this.extensions.add(".vcf", "text/x-vcard");
            this.extensions.add(".3gp", "video/3gpp");
            this.extensions.add(".3g2", "video/3gpp2");
            this.extensions.add(".h261", "video/h261");
            this.extensions.add(".h263", "video/h263");
            this.extensions.add(".h264", "video/h264");
            this.extensions.add(".jpgv", "video/jpeg");

            this.extensions.add(".jpm", "video/jpm");
            this.extensions.add(".jpgm", "video/jpm");

            this.extensions.add(".mj2", "video/mj2");
            this.extensions.add(".mjp2", "video/mj2");

            this.extensions.add(".mp4", "video/mp4");
            this.extensions.add(".mp4v", "video/mp4");
            this.extensions.add(".mpg4", "video/mp4");
            this.extensions.add(".m4v", "video/mp4");

            this.extensions.add(".webm", "video/webm");

            this.extensions.add(".mpeg", "video/mpeg");
            this.extensions.add(".mpg", "video/mpeg");
            this.extensions.add(".mpe", "video/mpeg");
            this.extensions.add(".m1v", "video/mpeg");
            this.extensions.add(".m2v", "video/mpeg");

            this.extensions.add(".ogv", "video/ogg");

            this.extensions.add(".qt", "video/quicktime");
            this.extensions.add(".mov", "video/quicktime");

            this.extensions.add(".fvt", "video/vnd.fvt");

            this.extensions.add(".mxu", "video/vnd.mpegurl");
            this.extensions.add(".m4u", "video/vnd.mpegurl");

            this.extensions.add(".pyv", "video/vnd.ms-playready.media.pyv");
            this.extensions.add(".viv", "video/vnd.vivo");

            this.extensions.add(".dv", "video/x-dv");
            this.extensions.add(".dif", "video/x-dv");

            this.extensions.add(".f4v", "video/x-f4v");
            this.extensions.add(".fli", "video/x-fli");
            this.extensions.add(".flv", "video/x-flv");

            this.extensions.add(".asf", "video/x-ms-asf");
            this.extensions.add(".asx", "video/x-ms-asf");

            this.extensions.add(".wm", "video/x-ms-wm");
            this.extensions.add(".wmv", "video/x-ms-wmv");
            this.extensions.add(".wmx", "video/x-ms-wmx");
            this.extensions.add(".wvx", "video/x-ms-wvx");
            this.extensions.add(".avi", "video/x-msvideo");
            this.extensions.add(".movie", "video/x-sgi-movie");
            this.extensions.add(".ice", "x-conference/x-cooltalk");
            this.extensions.add(".indd", "application/x-indesign");
            this.extensions.add(".dat", "application/octet-stream");
            this.extensions.add(".gz", "application/x-gzip");
            this.extensions.add(".tgz", "application/x-tar");

            this.extensions.add(".manifest", "text/cache-manifest");
            this.extensions.add(".mf", "text/cache-manifest");
            this.extensions.add(".appcache", "text/cache-manifest");
        }

        get(file: string): string
        {
            const parts = file.toLowerCase().split(".");

            if (parts.length === 0)
                return null;

            return this.extensions.get(`.${parts[parts.length - 1]}`);
        }
    }

    export var mimeType = new FileMimeType();
}
-- CreateTable
CREATE TABLE `secus` (
    `xcusid` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `ztime` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `zemail` VARCHAR(100) NOT NULL,
    `zutime` DATETIME(0) NULL,
    `xemail` VARCHAR(100) NULL,
    `bizid` INTEGER NOT NULL,
    `xcus` VARCHAR(20) NOT NULL,
    `xshort` VARCHAR(255) NULL,
    `xorg` VARCHAR(255) NULL,
    `xaddress1` VARCHAR(300) NULL,
    `xaddress2` VARCHAR(300) NULL,
    `xcity` VARCHAR(50) NULL,
    `xstate` VARCHAR(50) NULL,
    `xcountry` VARCHAR(50) NULL,
    `xcontact` VARCHAR(50) NULL,
    `xphone` VARCHAR(20) NULL,
    `xmobile` VARCHAR(15) NOT NULL,
    `xpassword` VARCHAR(256) NULL,
    `xnid` VARCHAR(20) NULL,
    `xtaxno` VARCHAR(20) NULL,
    `xtaxscope` VARCHAR(100) NULL,
    `xgcus` VARCHAR(50) NULL,
    `xcustype` VARCHAR(50) NULL,
    `xempclosed` VARCHAR(20) NULL,
    `xdiscountpct` DOUBLE NULL,
    `xemp` VARCHAR(50) NOT NULL,
    `xcreditlimit` DOUBLE NULL,
    `zactive` INTEGER NULL,

    UNIQUE INDEX `unq_bizid_cus`(`bizid`, `xcus`),
    PRIMARY KEY (`xcusid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `seitem` (
    `xitemid` INTEGER NOT NULL AUTO_INCREMENT,
    `ztime` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `zemail` VARCHAR(100) NOT NULL,
    `bizid` INTEGER NOT NULL,
    `xitemcode` VARCHAR(20) NOT NULL,
    `xdesc` VARCHAR(500) NOT NULL,
    `xlongdesc` VARCHAR(1500) NOT NULL,
    `xcatsl` INTEGER NOT NULL,
    `xcat` VARCHAR(250) NULL,
    `xsubcatsl` INTEGER NOT NULL,
    `xsubcat` VARCHAR(250) NULL,
    `xtype` VARCHAR(50) NULL,
    `xbrand` VARCHAR(50) NULL,
    `xgitem` VARCHAR(50) NULL,
    `xcitem` VARCHAR(50) NULL,
    `xsupport` VARCHAR(1000) NULL,
    `xsup` VARCHAR(20) NULL,
    `xunitpur` VARCHAR(20) NULL,
    `xunitsale` VARCHAR(20) NULL,
    `xunitstk` VARCHAR(20) NULL,
    `xconversionstk` DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    `xconversionsell` DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    `xmandatorybatch` VARCHAR(20) NULL DEFAULT 'No',
    `xserialconf` VARCHAR(20) NOT NULL DEFAULT 'None',
    `xtypestk` VARCHAR(20) NOT NULL DEFAULT 'Stocking',
    `xreorder` DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    `xcur` VARCHAR(9) NULL,
    `xpricepur` DECIMAL(10, 2) NULL,
    `xstdcost` DECIMAL(10, 2) NULL DEFAULT 0.00,
    `xmrp` DECIMAL(10, 2) NULL,
    `xstdprice` DECIMAL(10, 2) NOT NULL,
    `xstock` DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    `xdisc` DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    `xhscode` VARCHAR(50) NULL,
    `xweight` DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    `xvatpct` DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    `zactive` INTEGER NOT NULL DEFAULT 1,
    `xfeature` VARCHAR(1500) NULL,
    `ximages` VARCHAR(500) NULL,

    INDEX `fk_subcategory_seitem`(`xsubcatsl`),
    INDEX `xcatsl`(`xcatsl`, `xsubcatsl`),
    UNIQUE INDEX `uniq_bizid_xitemcode`(`bizid`, `xitemcode`),
    PRIMARY KEY (`xitemid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `zbusiness` (
    `bizid` INTEGER NOT NULL AUTO_INCREMENT,
    `ztime` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `xcontact` VARCHAR(250) NOT NULL,
    `xorg` VARCHAR(250) NOT NULL,
    `xbranch` VARCHAR(250) NOT NULL,
    `xphone` VARCHAR(50) NULL,
    `xmobile` VARCHAR(60) NOT NULL,
    `xemail` VARCHAR(250) NOT NULL,
    `xaddress1` VARCHAR(250) NOT NULL,
    `xaddress2` VARCHAR(250) NULL,
    `xcountry` VARCHAR(45) NULL,
    `xstate` VARCHAR(100) NULL,
    `xcity` VARCHAR(100) NULL,
    `xsmsapiurl` VARCHAR(1000) NULL,
    `xpromoemail` VARCHAR(250) NULL,
    `xsmtphost` VARCHAR(250) NULL,
    `xport` INTEGER NULL,
    `xsmtpuser` VARCHAR(250) NULL,
    `xsmtppass` VARCHAR(45) NULL,
    `xdomain` VARCHAR(255) NULL,
    `xdomainuser` VARCHAR(255) NULL,
    `xdomainpass` VARCHAR(100) NULL,
    `xsubdomain` VARCHAR(255) NULL,
    `xfbpageurl` VARCHAR(500) NULL,
    `zactive` INTEGER NOT NULL DEFAULT 1,

    UNIQUE INDEX `xemail_UNIQUE`(`xemail`),
    INDEX `indx_org`(`xorg`),
    PRIMARY KEY (`bizid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `zcodes` (
    `xcodeid` INTEGER NOT NULL AUTO_INCREMENT,
    `bizid` INTEGER NOT NULL,
    `ztime` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `xusername` VARCHAR(100) NOT NULL,
    `xcodetype` VARCHAR(150) NULL,
    `xcode` VARCHAR(250) NOT NULL,
    `xdepcode` VARCHAR(250) NULL,
    `xrem` VARCHAR(250) NULL,
    `zactive` INTEGER NOT NULL DEFAULT 1,

    INDEX `indx_bizid_codes`(`bizid`, `xcode`),
    INDEX `indx_bizid_codetype`(`bizid`, `xcodetype`),
    PRIMARY KEY (`xcodeid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `zrole` (
    `xroleid` INTEGER NOT NULL AUTO_INCREMENT,
    `ztime` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `zemail` VARCHAR(100) NOT NULL,
    `bizid` INTEGER NOT NULL,
    `xrole` VARCHAR(100) NOT NULL,
    `xroledt` VARCHAR(5000) NOT NULL,

    UNIQUE INDEX `unq_bizid_role`(`bizid`, `xrole`),
    PRIMARY KEY (`xroleid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `zuser` (
    `xuserid` INTEGER NOT NULL AUTO_INCREMENT,
    `ztime` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `bizid` INTEGER NOT NULL,
    `xusername` VARCHAR(100) NOT NULL,
    `xpassword` VARCHAR(256) NOT NULL,
    `xfullname` VARCHAR(250) NOT NULL,
    `xusermobile` VARCHAR(45) NULL,
    `xuseremail` VARCHAR(250) NULL,
    `xorg` VARCHAR(250) NOT NULL,
    `xbranch` VARCHAR(250) NOT NULL,
    `xrole` VARCHAR(100) NOT NULL,
    `xaddress1` VARCHAR(250) NOT NULL,
    `xaddress2` VARCHAR(250) NULL,
    `xcountry` VARCHAR(45) NULL,
    `xstate` VARCHAR(100) NULL,
    `xcity` VARCHAR(100) NULL,
    `xip` VARCHAR(64) NULL,
    `xmac` VARCHAR(64) NULL,
    `xlic` VARCHAR(64) NULL,
    `xlicused` VARCHAR(64) NULL,
    `zactive` INTEGER NOT NULL DEFAULT 1,

    INDEX `fk_zrole_zuser`(`bizid`, `xrole`),
    INDEX `xrole`(`xrole`),
    UNIQUE INDEX `unique_bizid_username`(`bizid`, `xusername`),
    PRIMARY KEY (`xuserid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `category` (
    `xcatsl` INTEGER NOT NULL AUTO_INCREMENT,
    `bizid` INTEGER NOT NULL,
    `xcat` VARCHAR(250) NOT NULL,
    `ximage` VARCHAR(250) NULL,

    UNIQUE INDEX `bizid`(`bizid`, `xcat`),
    PRIMARY KEY (`xcatsl`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ecomsales_temp` (
    `xtemsl` INTEGER NOT NULL AUTO_INCREMENT,
    `ztime` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `xdate` DATE NOT NULL,
    `bizid` INTEGER NOT NULL,
    `xcus` VARCHAR(20) NOT NULL,
    `xmobile` VARCHAR(15) NOT NULL,
    `xitemcode` VARCHAR(20) NOT NULL,
    `xprice` DECIMAL(10, 4) NOT NULL,
    `xqty` INTEGER NOT NULL,
    `xref` VARCHAR(100) NOT NULL,
    `xstatus` VARCHAR(30) NOT NULL,
    `xdocnum` INTEGER NULL,
    `xtxnmobile` VARCHAR(11) NOT NULL,
    `xtxnnum` VARCHAR(30) NOT NULL,
    `xoperator` VARCHAR(100) NOT NULL,

    UNIQUE INDEX `xtxnnum`(`xtxnnum`),
    INDEX `bizid`(`bizid`, `xcus`, `xitemcode`),
    INDEX `fk_seitem_ecomsales_temp`(`bizid`, `xitemcode`),
    PRIMARY KEY (`xtemsl`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ecomsalesdet` (
    `xecomdetsl` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `ztime` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `zemail` VARCHAR(100) NOT NULL,
    `bizid` INTEGER NOT NULL,
    `xdate` DATE NOT NULL,
    `xecomsl` INTEGER UNSIGNED NOT NULL,
    `xcus` VARCHAR(20) NOT NULL,
    `xrow` INTEGER NOT NULL DEFAULT 1,
    `xitemcode` VARCHAR(20) NOT NULL,
    `xwh` VARCHAR(50) NULL,
    `xbranch` VARCHAR(50) NULL,
    `xproj` VARCHAR(50) NULL,
    `xqty` DOUBLE NOT NULL,
    `xcost` DOUBLE NOT NULL DEFAULT 0,
    `xrate` DOUBLE NOT NULL,
    `xpaymethod` VARCHAR(50) NOT NULL,
    `xpoint` DOUBLE NOT NULL DEFAULT 0,
    `xunitsale` VARCHAR(20) NULL,
    `xtypestk` VARCHAR(20) NULL,
    `xexch` DOUBLE NOT NULL DEFAULT 1,
    `xcur` VARCHAR(10) NOT NULL DEFAULT '''BDT''',
    `xdisc` DOUBLE NOT NULL DEFAULT 0,
    `xtaxrate` DOUBLE NOT NULL DEFAULT 0,
    `xtaxcode` VARCHAR(20) NULL,
    `xtaxscope` VARCHAR(20) NULL,
    `xyear` INTEGER NOT NULL DEFAULT 0,
    `xper` INTEGER NOT NULL DEFAULT 0,
    `xstatus` VARCHAR(50) NOT NULL DEFAULT 'Pending',

    UNIQUE INDEX `xecomdetsl`(`xecomdetsl`),
    INDEX `bizid`(`bizid`, `xdate`, `xecomsl`, `xcus`, `xitemcode`),
    INDEX `fk_secus_ecomsalesdet`(`bizid`, `xcus`),
    INDEX `fk_seitem_ecomsalesdet`(`bizid`, `xitemcode`),
    INDEX `fk_ecomsalesmst_ecomsalesdet`(`xecomsl`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ecomsalesmst` (
    `xecomsl` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `ztime` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `zutime` DATETIME(0) NULL,
    `zemail` VARCHAR(100) NOT NULL,
    `xemail` VARCHAR(100) NULL,
    `bizid` INTEGER NOT NULL,
    `xdate` DATE NOT NULL,
    `xcus` VARCHAR(20) NOT NULL,
    `xdelname` VARCHAR(250) NULL,
    `xdeladdress` VARCHAR(500) NULL,
    `xdelcompany` VARCHAR(250) NULL,
    `xdelmethod` VARCHAR(250) NULL,
    `xdelemail` VARCHAR(150) NULL,
    `xmobile` VARCHAR(15) NULL,
    `xpaymethod` VARCHAR(50) NOT NULL,
    `xdistrict` VARCHAR(50) NULL,
    `xthana` VARCHAR(100) NULL,
    `xpostal` VARCHAR(10) NULL,
    `xgrossdisc` DOUBLE NOT NULL DEFAULT 0,
    `xnotes` MEDIUMTEXT NULL,
    `xbranch` VARCHAR(50) NULL,
    `xwh` VARCHAR(50) NULL,
    `xproj` VARCHAR(50) NULL,
    `xstatus` VARCHAR(20) NOT NULL,
    `xrecflag` VARCHAR(20) NOT NULL DEFAULT 'Live',
    `xyear` INTEGER NOT NULL,
    `xper` INTEGER NOT NULL,

    INDEX `bizid`(`bizid`, `xcus`),
    INDEX `xecomsl`(`xecomsl`),
    PRIMARY KEY (`xecomsl`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `subcategory` (
    `xsubcatsl` INTEGER NOT NULL AUTO_INCREMENT,
    `bizid` INTEGER NOT NULL,
    `xcatsl` INTEGER NOT NULL,
    `xsubcat` VARCHAR(250) NOT NULL,
    `xgroup` VARCHAR(250) NULL,

    INDEX `fk_category_subcategory`(`xcatsl`),
    UNIQUE INDEX `bizid`(`bizid`, `xcatsl`, `xsubcat`),
    PRIMARY KEY (`xsubcatsl`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `secus` ADD CONSTRAINT `fk_zbusiness_secus` FOREIGN KEY (`bizid`) REFERENCES `zbusiness`(`bizid`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `seitem` ADD CONSTRAINT `fk_category_seitem` FOREIGN KEY (`xcatsl`) REFERENCES `category`(`xcatsl`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `seitem` ADD CONSTRAINT `fk_subcategory_seitem` FOREIGN KEY (`xsubcatsl`) REFERENCES `subcategory`(`xsubcatsl`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `zrole` ADD CONSTRAINT `fk_zbusiness_zrole` FOREIGN KEY (`bizid`) REFERENCES `zbusiness`(`bizid`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `zuser` ADD CONSTRAINT `fk_zbusiness_zuser` FOREIGN KEY (`bizid`) REFERENCES `zbusiness`(`bizid`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `zuser` ADD CONSTRAINT `fk_zrole_zuser` FOREIGN KEY (`bizid`, `xrole`) REFERENCES `zrole`(`bizid`, `xrole`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `category` ADD CONSTRAINT `fk_zbusiness_category` FOREIGN KEY (`bizid`) REFERENCES `zbusiness`(`bizid`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `ecomsales_temp` ADD CONSTRAINT `fk_secus_ecomsales_temp` FOREIGN KEY (`bizid`, `xcus`) REFERENCES `secus`(`bizid`, `xcus`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `ecomsales_temp` ADD CONSTRAINT `fk_seitem_ecomsales_temp` FOREIGN KEY (`bizid`, `xitemcode`) REFERENCES `seitem`(`bizid`, `xitemcode`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `ecomsalesdet` ADD CONSTRAINT `fk_ecomsalesmst_ecomsalesdet` FOREIGN KEY (`xecomsl`) REFERENCES `ecomsalesmst`(`xecomsl`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `ecomsalesdet` ADD CONSTRAINT `fk_secus_ecomsalesdet` FOREIGN KEY (`bizid`, `xcus`) REFERENCES `secus`(`bizid`, `xcus`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `ecomsalesdet` ADD CONSTRAINT `fk_seitem_ecomsalesdet` FOREIGN KEY (`bizid`, `xitemcode`) REFERENCES `seitem`(`bizid`, `xitemcode`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `ecomsalesmst` ADD CONSTRAINT `fk_secus_ecomsalesmst` FOREIGN KEY (`bizid`, `xcus`) REFERENCES `secus`(`bizid`, `xcus`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `subcategory` ADD CONSTRAINT `fk_category_subcategory` FOREIGN KEY (`xcatsl`) REFERENCES `category`(`xcatsl`) ON DELETE RESTRICT ON UPDATE RESTRICT;

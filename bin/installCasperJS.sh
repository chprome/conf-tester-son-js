#!/bin/bash


###### START ######

## --- Prerequis

# 1 - PhantomJS
if [ ! -f "/usr/local/bin/phantomjs" ]; then
	
	echo "==============================="
	echo " Installing PhantomJs"

	phantom=phantomjs-1.9.2-linux-x86_64
	cd /opt
	wget https://phantomjs.googlecode.com/files/$phantom.tar.bz2
	
	bunzip2 $phantom.tar.bz2
	tar xf $phantom.tar
	
	cd $phantom
	ln -s /opt/$phantom/bin/phantomjs /usr/local/bin
	
	# clean
	rm /opt/$phantom.tar
	if [ -f "/opt/$phantom.tar.bz2" ]; then 
		rm /opt/$phantom.tar.bz2
	fi
fi

## --- Casper
casperDir=/opt/casperjs
if [ ! -d "/opt/casperjs" ];
then
	echo "==============================="
	echo " Installing casperJS"

	cd /opt;
	git clone git://github.com/n1k0/casperjs.git
fi
ln -sf $casperDir/bin/casperjs /usr/local/bin/casperjs


###### END ######

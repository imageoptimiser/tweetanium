/**
 * Tweetanium is released under the terms of the 
 * Apache Public License Version 2. 
 * Copyright (c) 2008 by Appcelerator, Inc.
 * http://tweetanium.com
 */

// create user table if not exists
var Tweetanium2 = {}; // Our top level namespace for this app.

/*
 *	Client Side Database Business...
 */

Tweetanium2 = {

	sql: 
	{
		login: 
		{
			getUserdata: "select username,password,remember from User where last_login = 1",
			getUser: "select username from User where username = ?",
			createUser: "insert into User values(?,?,?,?,?)",
			resetLogin: "update User set last_login = 0",
			updateUser: "update User set remember = ?, last_login = 1 where username = ?",
			create: "create table if not exists User (username text,password text, remember int, sound_on int, last_login int)"
		}
	},

	msgs:
	{
		login:
		{
			fileFailed: "Failed to open the database on disk.  This is probably because the version was bad or there is not enough space left in this domain's quota",
			databaseFailed: "Couldn't open the database. Please try with a WebKit nightly with this feature enabled"
		}
	},
	
	notification: Titanium.Notification.createNotification(),

	Create: function()
	{
		if (window.openDatabase) 
		{
	        Tweetanium2.db = openDatabase("tweetanium", "2.0", "Tweetanium 2", 200000);

	 		if (!Tweetanium2.db)
			{
	            alert(Tweetanium2.msgs.fileFailed);
				return;
			}
	    } 
		else
		{
	        alert(Tweetanium2.msgs.databaseFailed);
			return;
		}		
		
	    Tweetanium2.db.transaction(function(tx) 
		{
			tx.executeSql(
				Tweetanium2.sql.login.create, 
				[], 
				function(result) 
				{
            	}
			);
		});
	},
	
	RememberMe: function() 
	{	
	    Tweetanium2.db.transaction(function(tx) 
		{	
			
			// get user		
			tx.executeSql(
				Tweetanium2.sql.login.getUser, 
				[jQuery('#username').val()], 
				function(tx, result) 
				{
					// if user exists, update else create	
				 	if(result.rows.length > 0)
					{
						tx.executeSql(Tweetanium2.sql.login.resetLogin);
						tx.executeSql(Tweetanium2.sql.login.updateUser, [1,jQuery('#username').val()]);
					}
					else
					{
						tx.executeSql(Tweetanium2.sql.login.resetLogin);
						tx.executeSql(Tweetanium2.sql.login.createUser, 
						[
							jQuery('#username').val(), 
							jQuery('#password').val(), 
							1,
							1,
							1
						]);
					}
            	}
			);

		});
	},

	GetCredentials: function()
	{
		// get and use the users credentials if they are stored...

	    Tweetanium2.db.transaction(function(tx) 
		{	
			tx.executeSql(
				Tweetanium2.sql.login.getUserdata, 
				[], 
				function(tx, result) 
				{
					// get user credentials if remember me is set and user has logged in before	
				 	if(result.rows.length > 0)
					{
						var row = result.rows.item(0);
						
						jQuery("#remember").attr('class','');
						jQuery("#username").val(row['username']);
						jQuery("#password").val(row['password']);
					}
            	}
			);
		});

	},

	Login: function()
	{
		jQuery("#login").hide();
		jQuery("#indicator").show();

		var username = jQuery('#username').val();
		var password = jQuery('#password').val();
		var remember = (jQuery('#remember').hasClass('unchecked')) ? 0 : 1;
		if(remember == 1 && jQuery('#username').val() != "" && jQuery('#password').val() != "")
		{
			Tweetanium2.RememberMe();
		}

		jQuery.ajax(
		{
			url: 'http://twitter.com/account/verify_credentials.json',
			dataType: 'json',
			
			username: username,
			password: password,
			
			success: function(data,textStatus)
			{
				if (textStatus == 'success')
				{
					window.document.location.href = 'main.html?u='+encodeURIComponent(username)+'&p='+encodeURIComponent(password)+'&r='+remember;
				}
				else
				{
					Tweetanium2.notification.setTitle('Login Failed');
					Tweetanium2.notification.setMessage("Twitter don't know you. Try again");
					Tweetanium2.notification.setIcon('app://images/notification.png');
					Tweetanium2.notification.show();
					jQuery("#login").show();
					jQuery("#indicator").hide();
				}
			},
			error: function(XMLHttpRequest, textStatus, errorThrown)
			{
				Tweetanium2.notification.setTitle('Login Failed');
				Tweetanium2.notification.setMessage("Twitter don't know you. Try again");
				Tweetanium2.notification.setIcon('app://images/notification.png');
				Tweetanium2.notification.show();
				jQuery("#login").show();
				jQuery("#indicator").hide();
			}
		});
	}
};

$MQL("l:app.compiled", function()
{
	Tweetanium2.Create();
	Tweetanium2.GetCredentials();
	
	$('#remember').click(function()
	{
		if ($(this).hasClass('unchecked'))
		{
			$(this).removeClass('unchecked');
		}
		else
		{
			$(this).addClass('unchecked')
		}
	});

	setTimeout(function()
	{
		// make the username field active...
		jQuery('#username').get(0).focus();
		
	}, 1000);

	$('#close').click(function()
	{
		Titanium.UI.currentWindow.close();
		//Titanium.App.exit();
	});
});

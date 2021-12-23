

///
/// GetAccessToken()
///
function app_global_GetAccessToken()
{
	var accessToken = "";

	try
	{
		$.ajax
			({
				url: "http://win-sp2019/websites/devubclassic" + "/_api/contextinfo",
				type: "POST",
				async: false,
				headers: { "accept": "application/json;odata=verbose" },
				success: function (data) {
					accessToken = data.d.GetContextWebInformation.FormDigestValue;
					console.log(accessToken);

					app_global_accessToken = accessToken;

					//$("div[id='divInfoMessage']").text(accessToken);
				},
				error: function (xhr, status, error) {
					console.log("Failed");

					//$("div[id='divInfoMessage']").text("Failed:" + error);
				}
			});
	}
	catch (e)
	{
		// Anweisungen für jeden Fehler
		console.log(e);
	}

	return accessToken;
}; // function app_global_GetAccessToken()


function FindProxyForURL(url, host)
{
    url = url.toLowerCase();
    if(shExpMatch(url,"*baidu.com*"))
    {
    	return "PROXY 117.50.35.54:8868";
    }
    return "DIRECT";
}
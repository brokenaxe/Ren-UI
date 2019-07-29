<%
Dim strName As String = request("name")
Dim strColor As String = request("color")
Dim strColorAlter As String = request("colorAlter")
Dim strBack As String = request("back")
Dim strBorder As String = request("border")
Dim strGradient As String = request("gradient")
%>
.button.<%=strName%>,
button.<%=strName%> {
    text-shadow: none;
}
.text-<%=strName%> {
    color: <%=strColor%>;
}
.breadcrumb.<%=strName%> a,
.bg.<%=strName%> .message,
.button.<%=strName%>,
button.<%=strName%>,
.gradient.<%=strName%>,
.label.<%=strName%>,
.tooltip-<%=strName%>:after,
.bg.<%=strName%> {
    color: <%=strColorAlter%>;
}
.button.<%=strName%>:hover .icon,
button.<%=strName%>:hover.icon,
.bg.<%=strName%> .icon {
    background-color: <%=strColorAlter%>;
}
.popup .holder .bg.<%=strName%>::before,
.button.<%=strName%> .icon,
button.<%=strName%> .icon,
hr.text-<%=strName%>,
.text-<%=strName%> hr,
.text-<%=strName%> .icon,
.icon.text-<%=strName%>,
.bg.<%=strName%> .message,
.gradient.<%=strName%>,
.button.<%=strName%>,
button.<%=strName%>,
.label.<%=strName%>,
.tooltip-<%=strName%>:after,
.bg.<%=strName%>::before,
field.bg.<%=strName%>,
select.bg.<%=strName%> {
    background-color: <%=strBack%>;
}
.label.<%=strName%>,
.tooltip-<%=strName%>:after,
.tooltip-<%=strName%>:before {
    border-top-color: <%=strBorder%>;
}
.tooltip-left.tooltip-<%=strName%>:before {
    border-top-color: transparent;
    border-left-color: <%=strBorder%>;
}
.tooltip-bottom.tooltip-<%=strName%>:before {
    border-top-color: transparent;
    border-bottom-color: <%=strBorder%>;
}
.tooltip-right.tooltip-<%=strName%>:before {
    border-top-color: transparent;
    border-right-color: <%=strBorder%>;
}
.shape.bottom.with-<%=strName%>::after {
	border-bottom-color: <%=strBack%>;
}
.shape.top.with-<%=strName%>::before {
	border-top-color: <%=strBack%>;
}
.border.<%=strName%> {
    border-color: <%=strBack%>;
}
.button.<%=strName%>:hover,
button.<%=strName%>:hover {
    background-color: <%=strGradient%>;
}
.gradient.<%=strName%> {
    background: <%=strBorder%>;
    background: -moz-radial-gradient(center, ellipse cover, <%=strGradient%> 0%, <%=strBorder%> 100%);
    background: -webkit-gradient(radial, center center, 0px, center center, 100%, color-stop(0%, <%=strGradient%>), color-stop(100%, <%=strBorder%>));
    background: -webkit-radial-gradient(center, ellipse cover, <%=strGradient%> 0%, <%=strBorder%> 100%);
    background: -o-radial-gradient(center, ellipse cover, <%=strGradient%> 0%, <%=strBorder%> 100%);
    background: -ms-radial-gradient(center, ellipse cover, <%=strGradient%> 0%, <%=strBorder%> 100%);
    background: radial-gradient(ellipse at center, <%=strGradient%> 0%, <%=strBorder%> 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='<%=strGradient%>', endColorstr='<%=strBorder%>', GradientType=1 );
}
.text-<%=strName%> {
    color: <%=strBack%>;
}
.fill.<%=strName%> {
    fill: <%=strBack%>;
}
.stroke.<%=strName%> {
    stroke: <%=strBack%>;
}
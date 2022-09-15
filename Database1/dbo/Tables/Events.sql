CREATE TABLE [dbo].[Event]
(
	[Id] INT NOT NULL PRIMARY KEY, 
    [Title] NVARCHAR(30) NOT NULL, 
    [Location ] NVARCHAR(30) NOT NULL, 
    [Description ] NVARCHAR(30) NOT NULL, 
    [Section ] NVARCHAR(30) NOT NULL, 
    [MaxParticipats ] INT NOT NULL, 
    [CurrentNumberOfParticipants ] INT NOT NULL, 
    [DateTime] DATETIME2 NOT NULL

)

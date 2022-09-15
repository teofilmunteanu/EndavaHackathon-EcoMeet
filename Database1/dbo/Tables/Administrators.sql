CREATE TABLE [dbo].[Administrator]
(
	[Email] NVARCHAR(30) NOT NULL, 
    [FirstName] NVARCHAR(30) NOT NULL, 
    [LastName] NVARCHAR(30) NOT NULL, 
    [PhoneNumber] NVARCHAR(30) NOT NULL,
    CONSTRAINT [PK_Administrator] PRIMARY KEY ([Email]), 
)

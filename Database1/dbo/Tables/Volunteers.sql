﻿CREATE TABLE [dbo].[Volunteers]
(
    [Email] NVARCHAR(30) NOT NULL, 
    [Password] NVARCHAR(30) NOT NULL, 
    [FirstName] NVARCHAR(30) NOT NULL, 
    [LastName] NVARCHAR(30) NOT NULL, 
    [Username] NVARCHAR(30) NOT NULL, 
    [City] NVARCHAR(30) NOT NULL, 
    [Level] INT NOT NULL, 
    [Points] INT NOT NULL, 
    CONSTRAINT [PK_Volunteers] PRIMARY KEY ([Email])

)
